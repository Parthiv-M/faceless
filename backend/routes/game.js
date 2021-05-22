const express = require('express');
const router = express.Router();
const User = require('./../models/User');
const Team = require('./../models/Team');
const Question = require('./../models/Question');
const Storyline = require('./../models/Storyline');
const answerLogger = require('./../middleware/answerLog');
const levelChecker = require('./../middleware/levelChecker');
const hintGiver = require('./../middleware/hintGiver');
const authenticate = require('./../middleware/authenticate');
const { isSubsetOf } = require('is-subset-of');

// route to display five random questions of a particular character
router.get('/getQuestion/:characterName', authenticate, async(req, res) => {
    let fiveRandom = [];
    try {
        var ques = await Question.find({ character: req.params.characterName });
        if(!ques) {
            return res.status(400).send({ error: 'Character/questions not found' });
        }
        for(let i = 0; i < 5; i++){
            var randomItem = ques[Math.floor(Math.random() * ques.length)]; // get a random question
            fiveRandom.push(randomItem);                                    // push it to a new array
            ques = ques.filter(item => item != randomItem);                 // remove the selected question from further iterations
        }
        res.status(200).send(fiveRandom);
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

// route to submit the answer to one particular question
router.post('/submitAnswer/:character', authenticate, answerLogger, async (req, res, next) => {
    try {
        var ques = await Question.find(
            { character: req.params.character } 
        );

        if(ques){
            // create an array of the correct answers from database
            let correctAns = [];
            let points = [];
            ques.map((question) => {
                correctAns.push(question.answer)
            })

            // create an array of the user's answers
            let answerArr = req.body.answer.split('_');

            // check if the user's answer is a subset of the correct answers 
            if(isSubsetOf(answerArr, correctAns)){
                req.correctAnswers = answerArr;
                req.ques = ques;
                next();
            } else {
                res.status(400).send({ error: 'Dang! Wrong answer' });
            }
        } else {
            res.status(401).send({ error: 'Question does not exist' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Server error' });
    }
}, hintGiver, levelChecker);

// helper route to create question in the database
router.post('/createQuestion', (req, res) => {
    try {
        var ques = new Question({
            character: req.body.character,
            question: req.body.question,
            answer: req.body.answer,
            points: req.body.points,
            level: req.body.level 
        });
        if(!ques) {
            return res.status(400).send({ error: 'Error creating question' });
        }
        // save the question to database
        ques.save().then(() => {
            res.status(200).send({ message: 'Question created' });
        });
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

// route to get the current character of the team
router.get('/getCharacter', authenticate, async (req, res) => {
    try {
        let team = await Team.findOne(
            { 
                teamMembers: {
                    $elemMatch: req.user
                } 
            }
        );
        if(!team) {
            return res.status(400).send({ error: 'Team not found' });
        } 
        res.status(200).send({ character: team.character });
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

// route to get teams with the top five scores
router.get('/getScorecard', authenticate, async(req, res) => {
    try {
        let teams 
            = await Team.find({}).sort({ score: -1 }).limit(5);
        if(!teams) {
            return res.status(400).send({ error: 'Cannot find teams' });
        }
        res.status(200).send(teams);
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

router.post('/createStoryline', (req, res) => {
    let story = new Storyline({
        story: req.body.story,
        character: req.body.character,
        hints: req.body.hints
    });
    story.save().then(() => {
        res.send(story);
    })
})

router.get('/getStoryline/:character', authenticate, async(req, res) => {
    try {
        let story = await Storyline.findOne({ character: req.params.character });
        if(!story) {
            return res.status(400).send({ error: 'Story not found' });
        }
        res.status(200).send({ message: 'Story found', story: story.story });
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

module.exports = router;