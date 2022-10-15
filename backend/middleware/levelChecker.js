const Team = require('./../models/Team');

// level keeper for the game
module.exports = async (req, res, next) => {
    if(req.answerLength === 3) {
        next();
    } else  if (req.answerLength === 5) {
        let characters = ['Hrithik', 'Bam', 'Sriracha', 'Roy Kapoor', 'PM Singh', 'Bachchan', 'Rana', 'Shukla', 'Khanna','CV','Raghuram Nayak'];
        try {
            // get the currect level of the player and determine next level 
            const currChar = req.params.character;
            let currCharIndex = characters.indexOf(currChar);
            let nextLevelChar = characters[currCharIndex + 1];
            let team = await Team.findOneAndUpdate(
                { 
                    teamMembers: {
                        $elemMatch: req.user
                    }
                },
                {
                    $set: {
                        character: nextLevelChar
                    }
                }
            );
            next();
        } catch (error) {
            res.status(500).send({ error: 'Server error' });
        }
    }
}