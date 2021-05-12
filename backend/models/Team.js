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
    points: {
        type: Number,
        default: 0
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