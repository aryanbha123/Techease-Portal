import mongoose from 'mongoose';
import Quiz from '../models/Quiz.js';
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
    const { question,quizId, marks, image, category, answer } = req.body;
    try {
        (await session).startTransaction();
        const questionToAdd = {
            marks,
            category,
            question,
            quizId
        };
        const isValidQuestion = await checkQuestion(questionToAdd);
        if (isValidQuestion) {
            const newQuestion = questionToAdd;
            if (answer && category == "Text") {
                newQuestion.answer = answer;
            }
            if (req.file) {
                console.log('image there')
                newQuestion.image = req.file.path;
            }
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
    } finally {
        (await session).endSession();
    }

}
export const addOption = async (req, res) => {
    try {
        // const { questionId, text, isCorrect } = req.body;
        // if (!text, !questionId) {
        //     return sendRes("Please fill all the fields", 400, false, res);
        // }
        // const optionToAdd = {
        //     questionId,
        //     text,
        //     isCorrect
        // };
        // const newOption = new Option(optionToAdd);
        // if (req.file.path) {
        //     newOption.image = req.file.path;
        // }
        // await newOption.save();
        return sendRes("Option Added Successfully ",)
    } catch (error) {
        return sendRes(error.message, 500, false, res);
    }
};

export const getQuiz = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 10; 
        const search = req.query.search || "";

        const skip = (page - 1) * limit;

        const query = search
            ? { title: { $regex: search, $options: "i" } }
            : {};

        const quizzes = await Quiz.find(query).skip(skip).limit(limit);
     
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

export const addQuestions = async (req, res) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const { data, quizId } = req.body;
        console.log(data);
        // Ensure that quidId and data are provided
        // if (!quidId || !data || !Array.isArray(data)) {
        //     return sendRes("Invalid input data", 400, false, res);
        // }

        // Find the quiz by id and add questions
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return sendRes("Quiz not found", 404, false, res);
        }
        quiz.questions = [...data]; 
        await quiz.save();

        await session.commitTransaction();
        sendRes("Questions added successfully", 200, true, res);
    } catch (error) {
        await session.abortTransaction();
        console.log(error.message);
        sendRes(error.message, 500, false, res);
    } finally {
        session.endSession();
    }
};
