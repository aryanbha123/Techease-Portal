"use strict";
configDotenv();
import express from 'express';
import {configDotenv} from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connection from './db/connectToDb.js';
import {Server} from 'socket.io';
import http from 'http'
// importing routes starts
import QuizRoutes from './app/routes/Quiz.js';
import corsConfig from './config/corsConfig.js';
// importing routes ends

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsConfig))
connection();

// io 
const io = new Server(server, {cors:corsConfig});
io.on('connection' , (S)=>{
    console.log('a user connected');
})
// middlewares

// api
app.use('/api' , QuizRoutes);

app.get('/' ,(req,res)=> { res.send(req.sessionID); } );
server.listen(PORT,() => { console.log("http://localhost:"  + PORT + " " + JSON.stringify(corsConfig)) })