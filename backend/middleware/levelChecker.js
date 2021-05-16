const Team = require('./../models/Team');

module.exports = async function (req, res, next) {

    const levels = [
        {
            name: 'Tanvi',
            level: 1
        },
        {
            name: 'Ajay',
            level: 2
        },
        {
            name: 'Amitabh',
            level: 3
        },
        {
            name: 'A',
            level: 4
        },
        {
            name: 'B',
            level: 5
        },
        {
            name: 'C',
            level: 6
        },
        {
            name: 'D',
            level: 7
        },
        {
            name: 'E',
            level: 8
        },
        {
            name: 'F',
            level: 9
        },
        {
            name: 'G',
            level: 10
        }
    ];

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

        // gets the currect level of the player and determines next level 
        let currChar = team.character;
        let currLevel = levels.find(level => level.name == currChar);
        let nextLevelChar = levels[levels.indexOf(currLevel) + 1].name;

        // updates level to the database
        Team.findOneAndUpdate(
            { _id: team._id },
            {
                $set: {
                    character: nextLevelChar
                } 
            }
        ).then(() => {
            res.status(200).send({ code: 1, message: 'Cleared character, move on to next', character: nextLevelChar });
        })
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
};