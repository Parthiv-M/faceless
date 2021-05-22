const Team = require('./../models/Team');
const User = require('./../models/User');

module.exports = async function (req, res, next) {

    const levels = [
        {
            name: 'Okami',
            level: 1
        },
        {
            name: 'Kendo',
            level: 2
        },
        {
            name: 'Hyotto',
            level: 3
        },
        {
            name: 'Kappa',
            level: 4
        },
        {
            name: 'Tengu',
            level: 5
        },
        {
            name: 'Oni',
            level: 6
        },
        {
            name: 'Hanya',
            level: 7
        },
        {
            name: 'Kitsune',
            level: 8
        },
        {
            name: 'Samuri',
            level: 9
        },
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
        ).then(async (team) => {
            let check = team.flagged.some(flag => flag.character === req.params.character);
            
            let points = [];
                        
            req.ques.map((question) => {
                if(req.correctAnswers.includes(question.answer)){
                    points.push(question.points);
                }
            });

            // computes total score of submitted answers
            var sum = points.reduce(function(a, b){
                return a + b
            }, 0);
                        
            await User.findOneAndUpdate(
                { _id: req.user.userId },
                {
                    $inc: {
                        score: sum  
                    }
                }
            );

            let flaggedObj = {
                character: req.params.character,
                hintTaken: true
            };

            if(check) {
                // deduct the score of the hints used
                sum = sum - (3*(sum/points.length));
                await Team.findOneAndUpdate(
                    { 
                        teamMembers: {
                            $elemMatch: req.user
                        }
                    },
                    {   
                        $inc: {
                            score: sum 
                        }
                    }
                );
            } else {
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
                            score: sum
                        }
                    }
                );
            }
            res.status(200).send({ code: 1, message: 'Cleared character, move on to next', character: nextLevelChar });
        })
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
};