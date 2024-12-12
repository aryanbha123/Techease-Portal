export default async function checkQuestion(question) {
    if (!question.quizId || !question.question || !question.marks) {
        return {
            success: false,
            message: "Please fill all credentials",
        }
    }

    return { message: "", success: true }
}