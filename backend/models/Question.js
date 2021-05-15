const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for the question
const Question = new Schema({
    character: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 50
    }
});

module.exports = question = mongoose.model('Questions', Question);