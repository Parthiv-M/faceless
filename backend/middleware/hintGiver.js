const Storyline = require('./../models/Storyline');

module.exports = function (req, res, next) {
    // if 3 answers were submitted, return a hint
    if(req.correctAnswers.length === 3) {
        try {
            Storyline.findOne(
                { character: req.params.character },
            ).then((story) => {
                let hints = story.hints; 
                let randomHint = hints[Math.floor(Math.random() * hints.length)]
                res.status(200).send({ code: 0, message: 'hint given', hint: randomHint });
            })
        } catch (error) {
            res.status(500).send({ error: 'Server error' });
        }
    } 
    // else go to the next level
    else if (req.correctAnswers.length === 5) {
        next();
    } 
};