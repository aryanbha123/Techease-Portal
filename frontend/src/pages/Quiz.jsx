import { useState } from "react";
import QuizUI from "../components/shared/QuizUI";

const Quiz = () => {

    const quiz = {
        name: "JavaScript Basics",
        description: "A beginner-friendly quiz to test your knowledge of JavaScript fundamentals.",
        maxMarks: 10,
        duration: 20,
        openingTime: new Date("2024-12-01T09:00:00Z"), // Opening time in UTC
        closingTime: new Date("2024-12-01T12:00:00Z"), // Closing time in UTC
        createdBy: "64f123abc456def789123456", // Replace with a valid User ObjectId
        questions: [
            {
                text: "What is the output of `console.log(typeof null)`?",
                image: null,
                options: [
                    { text: "object", isCorrect: true },
                    { text: "null", isCorrect: false },
                    { text: "undefined", isCorrect: false },
                    { text: "error", isCorrect: false },
                ],
                marks: 1
            },
            {
                text: "Which of the following is not a reserved keyword in JavaScript?",
                image: null,
                options: [
                    { text: "interface", isCorrect: false },
                    { text: "program", isCorrect: true },
                    { text: "throws", isCorrect: false },
                    { text: "abstract", isCorrect: false },
                ],
                marks: 2
            },
            {
                text: "What will the following code output? `console.log(1 + '1');`",
                image: null,
                options: [
                    { text: "2", isCorrect: false },
                    { text: "11", isCorrect: true },
                    { text: "NaN", isCorrect: false },
                    { text: "undefined", isCorrect: false },
                ],
                marks: 1
            },
            {
                text: "Which of the following methods is used to parse a JSON string?",
                image: null,
                options: [
                    { text: "JSON.stringify()", isCorrect: false },
                    { text: "JSON.parse()", isCorrect: true },
                    { text: "JSON.objectify()", isCorrect: false },
                    { text: "JSON.encode()", isCorrect: false },
                ],
                marks: 2
            },
            {
                text: "What does `NaN` stand for in JavaScript?",
                image: null,
                options: [
                    { text: "Not a Number", isCorrect: true },
                    { text: "Null and Nullified", isCorrect: false },
                    { text: "No Actual Name", isCorrect: false },
                    { text: "Node and Network", isCorrect: false },
                ],
                marks: 1
            }
        ]
    };

    const [user, setUser] = useState(true);

    if (!user) {
        return <button onClick={() => { setUser(true) }} >Btn</button>
    }
    return (
        <>
            <QuizUI quiz={quiz} />
        </>
    )
}


export default Quiz;