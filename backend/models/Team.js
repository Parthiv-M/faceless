const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose schema for the team
const Team = new Schema({
    teamCode: {
        type: String,
        default: '000XXX',
        unique: true
    },
    teamName: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 10
    },
    teamMembers: {
        type: Array,
        required: true
    },
    teamQuestions: [{
        character: {
            type: String,
            default: 'Hrithik'
        },
        questions: {
            type: Array
        }
    }],  
    score: {
        type: Number,
        default: 0
    },
    answerLog: {
        type: Array
    },
    character: {
        type: String,
        default: 'Okami'
    },
    flagged: [{
        character: {
            type: String
        },
        hintTaken: {
            type: Boolean,
            default: false
        }
    }]
});

module.exports = team = mongoose.model('Team', Team);