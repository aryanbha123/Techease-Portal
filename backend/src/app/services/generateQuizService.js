import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";
configDotenv();
const key = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateQuizService(title, marks, noOfQuestions, Difficulty) {
    try {
        const prompt = `
            Create a structured JSON object for a quiz with the following format:
            {
            questions: Array<{
                question: string,
                marks:int,
                options: Array<{ text: string, isCorrect: boolean }>
            }>
            }
            The quiz topic is ${title} , Total Marks ${marks} , Total number of questions ${noOfQuestions} and Difficulty level ${Difficulty}
            `;
        const res = await model.generateContent(prompt);

        const content = res.response.text(); // Access the generated content directly
        return content;
    } catch (error) {
        return error.message;
    }
}

function convertToJson(jsonString) {
    try {
        // Trim any extra quotes or whitespace
        const cleanString = jsonString.trim().replace(/^```|```$/g, '');
        // Parse the JSON
        const jsonObject = JSON.parse(cleanString);
        return jsonObject;
    } catch (error) {
        console.error("Invalid JSON string:", error);
        return null;
    }
}


