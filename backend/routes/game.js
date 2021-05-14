const express = require('express');
const router = express.Router();
const Question = require('./../models/Question');

// route to display five random questions of a particular character
router.get('/getQuestion/:characterName', async(req, res) => {
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
router.post('/submitAnswer/:levelNumber/:quesId', async (req, res) => {
    try {
        var ques = await Question.findOne(
            { _id: req.params.quesId } 
        );

        if(ques){
            if(ques.allowedAns.includes(req.body.answer)){
                res.status(200).send({ message: 'Bingo!' });
            } else {
                res.status(400).send({ error: 'Dang! Wrong answer' });
            }
        } else {
            res.status(401).send({ error: 'Question does not exist' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

// helper route to create question in the database
router.post('/createQuestion', (req, res) => {
    try {
        var ques = new Question({
            character: req.body.character,
            question: req.body.question,
            allowedAns: req.body.allowed 
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

module.exports = router;