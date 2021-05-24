const Team = require('./../models/Team');

module.exports = async (req, res, next) => {
    try {
        // add answer to the answer log only if it is unique
        await Team.findOneAndUpdate(
            { 
                teamMembers: {
                    $elemMatch: req.user
                } 
            },
            {
                $addToSet: {
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