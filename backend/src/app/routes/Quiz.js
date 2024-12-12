import {Router} from 'express'
import { addQuiz } from '../controllers/QuizControllers.js';
import { generateQuiz } from '../controllers/QuizGenerate.js';

const app = Router();

app.get('/' , (req,res)=> {
    console.log('Hello World');
    res.send('Hello World');
})

app.post('/quiz/add/' , addQuiz);
app.post('/quiz/edit/' , addQuiz);
app.post('/quiz/del/' , addQuiz);
app.get('/quiz/view/' , addQuiz);
app.get('/quiz/generate/' , generateQuiz);

export default app;