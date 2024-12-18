import {Router} from 'express'
import { addOption, addQuestion, addQuiz, getParticularQuiz, getQuiz } from '../controllers/QuizControllers.js';
import { generateQuiz } from '../controllers/QuizGenerate.js';
import upload from '../middlewares/upload.js';

const app = Router();

app.get('/' , (req,res)=> {
    console.log('Hello World');
    res.send('Hello World');
})

app.post('/quiz/add/' , addQuiz);
app.post('/quiz/add/question' , upload.single('image') , addQuestion);
app.post('/quiz/add/option' ,  upload.single('image'), addOption);
app.get('/quiz/get/' , getQuiz);
app.post('/quiz/del/' , addQuiz);
app.get('/quiz/view/' , addQuiz);
app.get('/quiz/generate/' , generateQuiz);
app.get('/quiz/:id' , getParticularQuiz);

export default app;