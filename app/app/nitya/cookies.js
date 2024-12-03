const cookieParser = require('cookie-parser')
const express = require('express');
const app = express();


app.use(cookieParser());

app.get('/set', function (req, res) {
    res.cookie('name', 'Nityaaa', {
        maxAge: 3000
    });
    res.cookie('namee', 'Nityaaa', {
        maxAge: 3000    });
    res.send('Cookie set');
})

app.get('/get' , function(req,res){
    
    const name = req.cookies.name;
    res.send(name);
})

app.get('/delete' , function (req,res){
    res.clearCookie('name');
    res.clearCookie('namee');
    res.send('Cookie deleted');
})

app.listen(8000, (req, res) => {
    console.log('server is running on port 3002')
});