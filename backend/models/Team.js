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
        required: true
    },
    teamMembers: {
        type: Array,
        required: true
    },
    questionsAns: {
        type: Number,
        default: 0
    },  
    score: {
        type: Number,
        default: 0
    },
    answerLog: {
        type: Array
    },
    character: {
        type: String,
        default: 'Tanvi'
    },
    flagged: [{
        quesId: {
            type: String
        },
        numberOfTries: {
            type: Number,
            default: 0
        }
    }]
});

module.exports = team = mongoose.model('Team', Team);