import React, { useState, useEffect } from 'react';
import { Fullscreen } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';

const Solution = () => {
    const quiz = {
        "_id": { "$oid": "67648194d6b7cc646baa81f3" },
        "creator": { "$oid": "675e7ff4f6a2477683e5a161" },
        "title": "Test Quiz - 2",
        "opensAt": { "$date": "2024-12-20T00:00:00.000Z" },
        "closeAt": { "$date": "2024-12-21T00:00:00.000Z" },
        "duration": 100, // Duration in minutes
        "questions": [
            {
                "question": "Who is PM?",
                "marks": 2,
                "options": [
                    { "text": "Namo", "isCorrect": true },
                    { "text": "Rahul", "isCorrect": false },
                    { "text": "Gukesh", "isCorrect": false },
                    { "text": "Aryan", "isCorrect": false }
                ]
            },
            {
                "question": "Who is PM?",
                "marks": 2,
                "options": [
                    { "text": "Namo", "isCorrect": true },
                    { "text": "Rahul", "isCorrect": false },
                    { "text": "Gukesh", "isCorrect": false },
                    { "text": "Aryan", "isCorrect": false }
                ]
            }
        ],
        "marks": 100,
        "averageScore": 0,
        "highestScore": 0,
        "isAvailable": false,
        "createdAt": { "$date": "2024-12-19T20:27:00.655Z" },
        "updatedAt": { "$date": "2024-12-19T20:31:03.785Z" }
    };

    const [timeStarted, setTimeStarted] = useState(new Date("2024-12-20T11:09:40.858Z")); // Record the start time when the component mounts
    const [timeLeft, setTimeLeft] = useState(quiz.duration * 60 * 1000); // Duration in milliseconds
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Timer countdown based on current time
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = Date.now(); // Get the current time in milliseconds
            const elapsed = currentTime - timeStarted; // Calculate the elapsed time since quiz started
            const remainingTime = Math.max(quiz.duration * 60 * 1000 - elapsed, 0); // Time left in milliseconds
            setTimeLeft(remainingTime); // Update state with time left
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval when component unmounts
    }, [timeStarted]);

    const handelFullScreen = () => {
        const element = document.getElementById('root');
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else {
            console.error("Fullscreen API is not supported in this browser.");
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000); // Convert milliseconds to minutes
        const seconds = Math.floor((time % 60000) / 1000); // Get remaining seconds
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <main className="font-[Lato] bg-[#f3f3f3] h-screen w-screen overflow-x-hidden overflow-y-scroll">
            {/* Navigation */}
            <header className="relative h-[80px] flex items-center justify-center">
                <nav className="bg-white flex justify-between w-[85%] p-5 rounded-3xl shadow-lg">
                    <div>
                        <span>Timer: {formatTime(timeLeft)}</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <Tooltip title="Full Screen Mode">
                            <Fullscreen onClick={handelFullScreen} className="cursor-pointer" />
                        </Tooltip>
                    </div>
                </nav>
            </header>

            {/* Question Side Nav */}
            <aside className="h-[80vh] overflow-y-scroll overflow-x-hidden fixed right-3 bg-red-500 w-20">
                {quiz.questions.map((question, index) => (
                    <div key={index} className="bg-white flex justify-center items-center p-5 shadow">
                        <Button
                            variant="contained"
                            sx={{
                                height: "43px",
                                width: "35px",
                                borderRadius: "100%",
                            }}
                            onClick={() => setCurrentQuestionIndex(index)}
                        >
                            {index + 1}
                        </Button>
                    </div>
                ))}
            </aside>

            {/* Question Area */}
            <section className="p-5 ml-[20%]">
                <h2 className="text-xl font-bold">{quiz.questions[currentQuestionIndex].question}</h2>
                <div>
                    {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                        <div key={index}>
                            <Button variant="outlined" sx={{ margin: "5px" }}>
                                {option.text}
                            </Button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Solution;
