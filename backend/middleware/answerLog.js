const Team = require('./../models/Team');

module.exports = function (req, res, next) {
    try {
        Team.findOneAndUpdate(
            { 
                teamMembers: {
                    $elemMatch: req.user
                } 
            },
            {
                $push: {
                    answerLog: req.body.answer
                }
            }
        ).then(() => {
            next();
        })
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
};