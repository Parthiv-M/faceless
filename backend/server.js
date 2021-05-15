const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./config/database');
const nconf = require('nconf');

// connects to the database
connectDB();

// loads environment variables, if any
nconf.argv().env();

const port = process.env.PORT || 3001;

// use express middleware
app.use(cors());
app.use(express.json({ extended: false }));

// middleware for using static files
if(nconf.get('NODE_ENV') === "dev"){
    app.use(express.static(path.join(__dirname, '../client' + '/public')));
} else {
    app.use(express.static(path.join(__dirname, '../client' + '/build')));
}

// routes for user actions
app.use('/api/user', require('./routes/user'));

// routes for the game and its actions
app.use('/api/game', require('./routes/game'));

// routes for the teams and their actions
app.use('/api/team', require('./routes/team'));

// buffer route
app.get('*', (req, res) => {
    if(nconf.get('NODE_ENV') === "dev"){
        res.sendFile(path.join(__dirname, '../' +'/client/public/index.html'));
    } else {
        res.sendFile(path.join(__dirname, '../' +'/client/build/index.html'));
    }
});

// listens to the app on PORT
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

