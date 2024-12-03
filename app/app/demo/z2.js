const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set-cookie'  , (req,res)=> {
    res.cookie('name' , {
        value: 'John',
        httpOnly: true,
        maxAge: 900000 
    }).send('')
});

app.listen(3000 , () => {
    console.log('Server is running on port 3000');
})