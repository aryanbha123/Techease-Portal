// session vs cookie
/*  

    statefull ,  stateless
    more secure , less secure
    server pe store , client pe store
    session ends when browser is closed , cookies can be set to expire after certain time ex: 90min
    less scalable , more scalabe 

    cookie-parser () parser -> cookie parse 
    cookie req k through jari hai 


*/
// jksdbfdhf

const express = require('express')
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
}));

// set a session 
app.get('/set', function (req, res) {
    req.session.user = "nitya";
    res.send("Cookie Set successfully");
})

// get a session
app.get('/get', function (req, res) {
    // res.send(req.session.user || "None");
    const name = req.session.user;
    res.send(name);
})

app.get('/delete', (req, res) => {
    req.session.destroy();
    res.send("Session deleted");
})

app.listen(8000, function () {
    console.log("server is running on port 8000");
});


