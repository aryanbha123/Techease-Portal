import jwt from 'jsonwebtoken';
import sendRes from '../util/sendRes.js';
export async function isAuthenticated(req, res , next) {
    try {
        const token = req.cookies.refresh_token;
        if(!token){
            return sendRes("Unauthorised ", 401, false, res );
        }
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token , secret);
        req.user = decoded;
        next();
    } catch (error) {
        return sendRes(error.message , 401,false,res);
    }
}