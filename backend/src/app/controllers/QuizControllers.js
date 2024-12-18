import mongoose from 'mongoose';
import Quiz, { Option, Question } from '../models/Quiz.js';
import sendRes from '../util/sendRes.js';
import checkQuestion from '../validators/isValidQuestion.js';
import isValidQuiz from '../validators/isValidQuiz.js';

export const addQuiz = async (req, res) => {
    try {
        const { creator, title, opensAt, closeAt, duration, questions, marks } = req.body;
        const reqQuiz = {
            creator,
            title,
            opensAt,
            closeAt,
            duration,
            questions,
            marks,
        };
        console.log(reqQuiz);
        const checkQuiz = await isValidQuiz(reqQuiz);

        if (checkQuiz.success) {
            const newQuiz = new Quiz(reqQuiz);
            await newQuiz.save();
            return sendRes("Quiz Created Successfully ", 200, true, res);
        } else {
            return sendRes(checkQuiz.message, 400, false, res);
        }
    } catch (error) {
        return sendRes(error.message, 500, false, res);
    }
};

export const addQuestion = async (req, res) => {

    const session = mongoose.startSession();
    const { quizId, question, marks,image,  category, answer } = req.body;
    try {
        (await session).startTransaction();
        const questionToAdd = {
            quizId,
            marks,
            category,
            question
        };
        const isValidQuestion = await checkQuestion(questionToAdd);
        if (isValidQuestion) {
            const newQuestion = new Question(questionToAdd);
            if (answer && category == "Text") {
                newQuestion.answer = answer;
            }
            if (req.file) {
                console.log('image there')
                newQuestion.image = req.file.path;
            }
            await newQuestion.save();
            const quiz = await Quiz.findById(quizId);
            quiz.questions.push(newQuestion);
            await quiz.save();
            (await session).commitTransaction();
            return sendRes("Question Added Successfully ", 200, true, res);
        } else {
            return sendRes(checkQuestion.message, 400, false, res);
        }
    } catch (error) {
        await (await session).abortTransaction();
        sendRes(error.message, 500, false, res);
    }finally{
        (await session).endSession();
    }

}
export const addOption = async (req, res) => {
    try {
        const { questionId, text, isCorrect } = req.body;
        if (!text, !questionId) {
            return sendRes("Please fill all the fields", 400, false, res);
        }
        const optionToAdd = {
            questionId,
            text,
            isCorrect
        };
        const newOption = new Option(optionToAdd);
        if (req.file.path) {
            newOption.image = req.file.path;
        }
        await newOption.save();
        return sendRes("Option Added Successfully ",)
    } catch (error) {
        return sendRes(error.message, 500, false, res);
    }
};

export const getQuiz = async (req, res) => {
    try {
        // Get page, limit, and search query from request parameters
        const page = parseInt(req.query.page) || 1; // Default page is 1
        const limit = parseInt(req.query.limit) || 10; // Default limit is 10
        const search = req.query.search || ""; // Search query, default is empty

        // Calculate the skip value
        const skip = (page - 1) * limit;

        // Build the query object for search
        const query = search
            ? { title: { $regex: search, $options: "i" } } // Case-insensitive regex search
            : {};

        // Fetch quizzes from the database with pagination and search
        const quizzes = await Quiz.find(query).skip(skip).limit(limit);

        // Total count of items that match the query
        const totalItems = await Quiz.countDocuments(query);

        res.status(200).json({
            status: true,
            data: quizzes,
            page: page,
            limit: limit,
            totalItems: totalItems, // Add total items count for frontend reference
            totalPages: Math.ceil(totalItems / limit), // Calculate total pages
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};

export const getParticularQuiz = async (req, res) => {
    try {
        const data = await Quiz.findById(req.params.id).populate('questions');
        if (!data) return sendRes("Quiz Not Found", 404, false, res);
        res.status(200).json(data);
    } catch (error) {
        sendRes("Internal Server Error ", 500, false, res)
    }
}