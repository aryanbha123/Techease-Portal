import {Router} from 'express'
import { addOption, addQuestion, addQuiz, getQuiz } from '../controllers/QuizControllers.js';
import { generateQuiz } from '../controllers/QuizGenerate.js';

const app = Router();

app.get('/' , (req,res)=> {
    console.log('Hello World');
    res.send('Hello World');
})

app.post('/quiz/add/' , addQuiz);
app.post('/quiz/add/question' , addQuestion);
app.post('/quiz/add/option' , addOption);
app.get('/quiz/get/' , getQuiz);
app.post('/quiz/del/' , addQuiz);
app.get('/quiz/view/' , addQuiz);
app.get('/quiz/generate/' , generateQuiz);

export default app;