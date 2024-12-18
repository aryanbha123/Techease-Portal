const axios = require('axios');

const generateQuiz =async  () => {
    const res = await axios.get('http://localhost:3001/api/quiz/generate?topic="DBMS"&marks=100&noOfQuestions=10&difficulty="hard"')
    // console.log(res.data);
    console.dir(convertInJson(res.data));
}


const convertInJson  = (str = "") => {
    
    str = str.split('');
    str.pop()
    str.pop()
    str.pop()
    str.shift();str.shift();str.shift();str.shift();str.shift();str.shift();str.shift();
    str = str.join('');
    str = str.trim();
    const quizJson = JSON.parse(str);
    return quizJson;
}
generateQuiz();

console.log(convertInJson('```json {} ```'));

