// const key = "AIzaSyAoGoKYw9Tvtl1yC-g6Q1Me4ZSeSdAQEnM";
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(key);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = `
// Create a structured JSON object for a quiz with the following format:
// {
//   questions: Array<{
//     question: string,
//     options: Array<{ text: string, isCorrect: boolean }>
//   }>
// }
// The quiz topic is "Artificial Intelligence".
// `;

// model.generateContent(prompt)
//   .then((res) => {
//     console.log("data");
//     const content = res.response?.text() || "No content generated";
//     console.log("Quiz Content:", content);
//   })
//   .catch(err => console.log("Error:", err.message));


const xlsx = require("xlsx");
const fs = require("fs");


const workbook = xlsx.readFile('data.xlsx');
const sheetName = workbook.SheetNames[0];
const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Map Excel Data to QuestionSchema
const quizId = '63f8e9e8c2d76b002b4567'; // Replace with actual quiz ID
const formattedData = jsonData.map((row) => ({
    quizId,
    question: row['Question'],
    marks: row['marks'],
    negative: row['negative'] || 0,
    category: "MCQ", 
    options: [
        { optionText: row['option1'] , isCorrect:true } ,
        { optionText: row['option2'] , isCorrect:false },
        { optionText: row['option3'] , isCorrect:false },
        { optionText: row['option4'] , isCorrect:false },
    ],
}));

fs.writeFileSync("data.json", JSON.stringify(formattedData, null, 2));

console.dir((formattedData) , {depth:2})