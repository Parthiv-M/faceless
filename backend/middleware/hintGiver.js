const Storyline = require('./../models/Storyline');
const Team = require('./../models/Team');
const User = require('./../models/User');

module.exports = async function (req, res, next) {
    // if 3 answers were submitted, return a hint
    if(req.correctAnswers.length === 3) {
        try {
            await Team.findOne({ 
                teamMembers: {
                    $elemMatch: req.user
                }
            }).then(async (team) => {
                let check = team.flagged.some(flag => flag.character === req.params.character);
                if(check) {
                    return res.status(401).send({ code: 10, message: 'Hint already taken' });
                } else {
                    await Storyline.findOne(
                        { character: req.params.character },
                    ).then(async (story) => {
                        let hints = story.hints; 
                        let randomHint = hints[Math.floor(Math.random() * hints.length)]
                        
                        let flaggedObj = {
                            character: req.params.character,
                            hintTaken: true
                        };

                        let points = [];
                        
                        req.ques.map((question) => {
                            if(req.correctAnswers.includes(question.answer)){
                                points.push(question.points);
                            }
                        });

                        // computes total score of submitted answers
                        let sum = points.reduce(function(a, b){
                            return a + b
                        }, 0);
                        
                        await User.findOneAndUpdate(
                            { _id: req.user.userId },
                            {
                                $inc: {
                                    score: sum * 0.8 
                                }
                            }
                        );

                        await Team.findOneAndUpdate(
                            { 
                                teamMembers: {
                                    $elemMatch: req.user
                                }
                            },
                            {
                                $push: {
                                    flagged: flaggedObj
                                },
                                $inc: {
                                    score: sum * 0.8
                                }
                            }
                        );
                        res.status(200).send({ code: 0, message: 'hint given', hint: randomHint });
                    });      
                }
            });   
        } catch (error) {
            console.log(error)
            res.status(500).send({ error: 'Server error' });
        }
    } 
    // else go to the next level
    else if (req.correctAnswers.length === 5) {
        next();
    } 
};