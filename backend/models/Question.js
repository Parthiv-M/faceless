const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for the question
const Question = new Schema({
    question: {
        type: String,
        required: true
    },
    allowed_ans: {
        type: Array,
        required: true
    }
});

module.exports = question = mongoose.model('Questions', Question);