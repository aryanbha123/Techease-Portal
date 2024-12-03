const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,

}));

// Route to set session data
app.get('/set-session', (req, res) => {
    req.session.user = 'Sheetal';
    res.send('Session data set');
});

// Route to access session data
app.get('/get-session', (req, res) => {
    if (req.session.user) {
        res.send(`Hello ${req.session.user}`); // Accessing session data
    } else {
        res.send('No session data available');
    }
});

// Route to destroy session data
app.get('/destroy-session', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Error destroying session');
        }
        res.send('Session destroyed');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
