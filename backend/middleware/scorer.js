const Team = require('./../models/Team');

// the scorekeeper for the game
module.exports = async (req, res, next) => {
    let flaggedObj = {
        character: req.params.character,
        hintTaken: true
    };

    // get points for one question
    let pointsForOne = req.databaseQuestions[0].questions[0].points;

    // calculate total score
    var sum = 0;
    if(req.answerLength === 3) {
        sum = pointsForOne * 3 * 0.75;
    } else {
        let team = await Team.findOne({ 
            teamMembers: {
                $elemMatch: req.user
            }
        });
        let check = team.flagged.some(flag => flag.character === req.params.character);
        if(check) {
            // reduce the points if hint has been taken
            sum = pointsForOne * 2;
        } else {
            sum = pointsForOne * 5;
        }
    }

    try {
        let team = await Team.findOneAndUpdate(
            { 
                teamMembers: {
                    $elemMatch: req.user
                }
            },
            {
                $inc: {
                    score: sum
                },
                $addToSet:
                 {
                    flagged: flaggedObj
                }
            }
        );   
        if(req.answerLength === 3) {
            res.status(200).send({ hint: req.randomHint });
        } else {
            res.status(200).send({ message: 'Level cleared' });
        } 
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
}