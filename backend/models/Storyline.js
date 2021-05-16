const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for the question
const Storyline = new Schema({
    character: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    hints: {
        type: Array
    }
});

module.exports = storyline = mongoose.model('Storyline', Storyline);