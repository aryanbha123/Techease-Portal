import Quiz, { Option, Question } from '../models/Quiz.js';
import sendRes from '../util/sendRes.js';
import isValidQuiz from '../validators/isValidQuiz.js';

export const addQuiz = async (req, res) => {
    try {
        const { creator, opensAt, closeAt, duration, questions, marks } = req.body;
        const reqQuiz = {
            creator,
            opensAt,
            closeAt,
            duration,
            questions,
            marks,
        };

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
    const { quizId, question, marks, category, answer } = req.body;
    try {
        const questionToAdd = {
            quizId,
            marks,
            question
        };
        const checkQuestion = await isValidQuestion(questionToAdd);
        if (checkQuestion) {
            const newQuestion = new Question(questionToAdd);
            if (answer && category == "Integer") {
                newQuestion.answer = answer;
            }
            await newQuestion.save();
            return sendRes("Question Added Successfully ", 200, true, res);
        } else {
            return sendRes(checkQuestion.message, 400, false, res);
        }
    } catch (error) {
        sendRes(error.message, 500, false, res);
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
        const newQuestion = new Option(optionToAdd);
        await newQuestion.save();
        return sendRes("Option Added Successfully ",)
    } catch (error) {
        return sendRes(error.message, 500, false, res);
    }
};


export const getQuiz = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        if (quizzes.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'No quizzes found',
            });
        }

        res.status(200).json({
            status: true,
            data: quizzes,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
};
