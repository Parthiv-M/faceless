const Storyline = require('./../models/Storyline');
const Team = require('./../models/Team');

// hint giver for the game
module.exports = async (req, res, next) => {
    // if three answers, then return a hint
    if(req.answerLength === 3) {
        try {
            let team = await Team.findOne({ 
                teamMembers: {
                    $elemMatch: req.user
                }
            });

            let check = team.flagged.some(flag => flag.character === req.params.character);
            if(check) {
                return res.status(401).send({ code: 10, message: 'Hint already taken' });
            } else {
                let story = await Storyline.findOne({ character: req.params.character });
                let hints = story.hints;
                let randomHint = hints[Math.floor(Math.random() * hints.length)];
                req.randomHint = randomHint;
                next();
            }
        } catch (error) {
            res.status(500).send({ error: 'Server error' });
        }
    } else if(req.answerLength === 5) {
        next();
    }
} 