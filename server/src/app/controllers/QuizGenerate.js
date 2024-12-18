import generateQuizService from "../services/generateQuizService.js";
import sendRes from "../util/sendRes.js";

export const generateQuiz = async (req, res) => {
    const { marks, topic, noOfQuestions, difficulty} = req.query;
    try {
        const quiz = await generateQuizService(marks, topic, noOfQuestions, difficulty);
        return res.status(200).json(quiz);
    } catch (error) {
        sendRes(error.message ,500 , false ,res);
    }
}
