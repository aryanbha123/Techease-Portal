// // const userDetails = {
// //     username: "Nitya",
// //     password: 123
// // };
// const userDetails = {
//     username: "Aryan",
//     password: "Password"
// };

// const express = require('express')
// const app = express();
// app.use(express.json())


// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     if (userDetails.username == username && userDetails.password == password) {
//         res.send("Login Success");
//     }
//     else {
//         res.status(400).send("Invalid Credentials");
//     }
// })


// app.listen(3000, (req, res) => {
//     console.log("Server is running on port 3000");
// })

// create a event name 'hello' which displays message hello user
const eventEmitter = require('events');

let myEmitter = new eventEmitter();
const greet = (name) =>{
    console.log("Hello User " + name);
}
myEmitter.on('hello' , greet)

myEmitter.emit('hello' ,  " Aryan");
// myEmitter.removeListener('hello' , greet)
myEmitter.emit('hello' ,  " Nitya");
