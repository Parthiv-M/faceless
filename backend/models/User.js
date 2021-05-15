const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nconf = require('nconf');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

nconf.argv().env().file({ file: 'config/config.json' });

// mongoose schema for the user
const User = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
      type: String,
      required: true
    },
    teamCode: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
});

// create a jwt with the user payload
User.methods.generateAuthToken = function(payload) {
    token = jwt.sign(
        payload,
        nconf.get('JWT_SECRET'),
        { expiresIn: 360000 }
    );
    return token;team
}

// encrypts the password before saving to the database
User.pre('save', function (next) {
    var user = this;
  
    if (user.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash;
          next();
        });
      });
    } else {
      next();
    }
});
  

module.exports = user = mongoose.model('User', User);