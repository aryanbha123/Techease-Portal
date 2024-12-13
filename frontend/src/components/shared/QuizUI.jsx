import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OutlinedFlag } from '@mui/icons-material';

export default function QuizUI({ quiz = {} }) {
  const navigate = useNavigate();
  const dummyQuiz = {
    name: "JavaScript Basics",
    description: "A beginner-friendly quiz to test your knowledge of JavaScript fundamentals.",
    maxMarks: 10,
    duration: 20, // duration in minutes
    openingTime: new Date("2024-12-01T09:00:00Z"),
    closingTime: new Date("2024-12-01T12:00:00Z"),
    createdBy: "64f123abc456def789123456",
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
      // Add other questions here...
    ]
  };

  const [startedQuiz, setStartedQuiz] = useState(null);
  const [questionNo, setQuestionNo] = useState(1);
  const [remainingTime, setRemainingTime] = useState(dummyQuiz.duration * 60 * 1000);
  const [userAnswers, setUserAnswers] = useState({});
  const [questionStatus, setQuestionStatus] = useState({});  // Track question status (attempted or skipped)
  const [flaggedQuestions, setFlaggedQuestions] = useState({});  // Track flagged questions

  const questions = dummyQuiz.questions;

  useEffect(() => {
    if (!startedQuiz) {
      setStartedQuiz(Date.now());
    }

    const calculateRemainingTime = () => {
      if (startedQuiz) {
        const elapsedTime = Date.now() - startedQuiz;
        const timeRemaining = remainingTime - elapsedTime;
        if (timeRemaining <= 0) {
          setRemainingTime(0);
          handleSubmitQuiz();
        } else {
          setRemainingTime(timeRemaining);
        }
      }
    };

    calculateRemainingTime();

    const timer = setInterval(() => {
      calculateRemainingTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [startedQuiz]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers, [questionIndex]: selectedOption };
      setQuestionStatus((prevStatus) => ({ ...prevStatus, [questionIndex]: 'attempted' }));
      return updatedAnswers;
    });
  };

  const handleSkipQuestion = (currentQuestionNo) => {
    setQuestionStatus((prevStatus) => ({ ...prevStatus, [currentQuestionNo]: 'skipped' }));
  };

  const handleFlagQuestion = () => {
    setFlaggedQuestions((prevFlags) => ({ ...prevFlags, [questionNo - 1]: !prevFlags[questionNo - 1] }));
  };

  const handleNextQuestion = () => {
    if (!userAnswers[questionNo - 1]) {  // If the question is not answered
      setQuestionStatus((prevStatus) => ({ ...prevStatus, [questionNo - 1]: 'skipped' }));  // Mark it as skipped
    }
    setQuestionNo((prevNo) => Math.min(prevNo + 1, dummyQuiz.questions.length));
  };

  const handlePreviousQuestion = () => {
    setQuestionNo((prevNo) => Math.max(prevNo - 1, 1));
    if (!userAnswers[questionNo - 1]) {  // If the question was not answered when going back, mark as skipped
      setQuestionStatus((prevStatus) => ({ ...prevStatus, [questionNo - 1]: 'skipped' }));
    }
  };

  const handleSubmitQuiz = () => {
    alert('Time is up! Submitting your quiz.');
    navigate("/results");
  };

  const handleFinalSubmit = () => {
    const responses = [];
    questions.map((_, index) => {
      if (userAnswers[index]) {
        const res = { question: questions[index], answer: userAnswers[index] };
        responses.push(res);
      }
    });
    console.log(responses);
    alert("Quiz submitted!");
    // navigate("/results");
  };

  return (
    <div className="container p-8 ">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
        <div className="flex-1 p-6 relative bg-white shadow-xl rounded-lg border border-gray-200">
          <div className="text-xl font-semibold mb-4 text-gray-900">{dummyQuiz.name}</div>
          <div className="text-sm text-gray-700 mb-4">{dummyQuiz.description}</div>
          <button
            onClick={handleFlagQuestion}
            className={` ${flaggedQuestions[questionNo - 1] ? 'bg-yellow-400' : ''} absolute right-4 p-1 text-sm rounded-full transition duration-200`}>
            {flaggedQuestions[questionNo - 1] ? "" : ""} <OutlinedFlag />
          </button>
          <div className="text-lg font-semibold mb-4">Question {questionNo}:</div>
          <div className="text-sm text-gray-800 mb-4">{dummyQuiz.questions[questionNo - 1].text}</div>

          <div className="mt-6 space-y-2">
            {dummyQuiz.questions[questionNo - 1].options.map((i) => (
              <div key={i.text} className="flex items-center gap-3">
                <input
                  type="radio"
                  name={`option${questionNo}`}
                  value={i.text}
                  checked={JSON.stringify(userAnswers[questionNo - 1]) === JSON.stringify(i)}
                  onChange={() => handleAnswerChange(questionNo - 1, i)}
                  className="form-radio text-sm"
                />
                <label className="text-sm text-gray-800">{i.text}</label>
              </div>
            ))}
          </div>

          <div className="flex gap-6 mt-6 justify-between">
            <button
              disabled={questionNo === 1}
              onClick={handlePreviousQuestion}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200 text-sm">
              Previous
            </button>
            <button
              disabled={questionNo === dummyQuiz.questions.length}
              onClick={handleNextQuestion}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 text-sm">
              Next
            </button>

          </div>
        </div>

        <div className="w-80 bg-gray-800 text-white p-6 rounded-lg shadow-xl">
          <div className="text-sm font-semibold mb-4">Remaining Time</div>
          <div className="text-xl font-bold">{formatTime(remainingTime)}</div>

          <div className="flex flex-wrap gap-4 mt-6">
            {dummyQuiz.questions.map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  if (!userAnswers[questionNo - 1]) {  // If the question is not answered
                    setQuestionStatus((prevStatus) => ({ ...prevStatus, [questionNo - 1]: 'skipped' }));  // Mark it as skipped
                  }; setQuestionNo(index + 1)
                }}
                className={`w-12 h-12 flex items-center justify-center cursor-pointer rounded-full
                  ${questionStatus[index] === 'attempted' ? 'bg-green-600' :
                    questionStatus[index] === 'skipped' ? 'bg-red-600' :
                      'bg-gray-600'} ${flaggedQuestions[index] ? 'bg-yellow-400' : ''} 
                  hover:bg-blue-500 transition duration-200 text-sm`}>
                <div>{index + 1}</div>
              </div>
            ))}
          </div>

          <button
            onClick={handleSubmitQuiz}
            className="w-full mt-8 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200 text-sm">
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
