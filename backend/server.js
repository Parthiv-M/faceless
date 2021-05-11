const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./config/database');
const nconf = require('nconf');

connectDB();
nconf.argv().env();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ extended: false }));

if(nconf.get('NODE_ENV') === "dev"){
    app.use(express.static(path.join(__dirname, '../client' + '/public')));
} else {
    app.use(express.static(path.join(__dirname, '../client' + '/public')));
}

app.get('*', (req, res) => {
    if(nconf.get('NODE_ENV') === "dev"){
        res.sendFile(path.join(__dirname, '../' +'/client/public/index.html'));
    } else {
        res.sendFile(path.join(__dirname, '../' +'/client/build/index.html'));
    }
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

