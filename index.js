const key = "AIzaSyAoGoKYw9Tvtl1yC-g6Q1Me4ZSeSdAQEnM";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `
Create a structured JSON object for a quiz with the following format:
{
  questions: Array<{
    question: string,
    options: Array<{ text: string, isCorrect: boolean }>
  }>
}
The quiz topic is "Artificial Intelligence".
`;

model.generateContent(prompt)
  .then((res) => {
    console.log("data");
    const content = res.response?.text() || "No content generated";
    console.log("Quiz Content:", content);
  })
  .catch(err => console.log("Error:", err.message));
