import { Router } from 'express'
import { getProfiile, login, logout, register } from '../controllers/UserControllers.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const app = Router();

app.post('/login' , login);
app.post('/logout' , logout);
app.post('/register' , register);
app.get('/profile', isAuthenticated, getProfiile);

export default app;