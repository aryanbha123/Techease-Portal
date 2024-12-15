import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv'
import bcrypt from 'bcrypt';
import sendRes from '../util/sendRes.js';
configDotenv();
import Users from '../models/Users.js';
const secret = process.env.JWT_SECRET;

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) {
            return sendRes("Invalid Credentials", 401, false, res);
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return sendRes("Invalid Credentials", 401, false, res);
        }
        const token = await jwt.sign({ id: user._id }, secret, { expiresIn: '1d' });
        res.cookie('refresh_token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: 'none',
        });
        return sendRes("Logged in successfully", 200, true, res);
    } catch (error) {
        sendRes(error.message, 500, false, res)
    }
}


export const getProfiile = async (req, res, next) => {
    try {
        const User = await Users.findById(req.user.id);
        if (!User) {
            return sendRes("User not found", 404, false, res);
        }
        return sendRes(User, 200, true, res);
    } catch (error) {
        sendRes(error.message, 500, false, res);
    }
}

export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const user = await Users.findOne({ email });
        if (user) {
            return sendRes("Email already exists", 400, false, res);
        }
        const newUser = new Users({ email, name, password });
        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id }, secret, { expiresIn: '1d' });
        res.cookie('refresh_token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: 'none',
        });
        sendRes("Registeration Successful " , 400 , false , res);
    } catch (error) {
        console.log(error)
        sendRes(error.message, 500, false, res);
    }
} 

export const logout = async (req,res) => {
    try {
        res.clearCookie('refresh_token' , {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: true,
            sameSite: 'none',
        });
        return sendRes("Logged out successfully", 200, true, res);
    } catch (error) {
        sendRes(error.message, 500, false, res);
    }
}