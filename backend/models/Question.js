const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for the question
const Question = new Schema({
    character: {
        type: String,
    },
    question: {
        type: String,
        required: true,
    },
    allowedAns: {
        type: Array,
        required: true
    }
});

module.exports = question = mongoose.model('Questions', Question);