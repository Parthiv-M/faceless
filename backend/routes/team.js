const express = require('express');
const router = express.Router();
const Team = require('./../models/Team');
const authenticate = require('./../middleware/authenticate');

// route to fetch team data
router.get('/getTeam', authenticate, async (req, res) => {
    try {
        let team = await Team.findOne(
            { 
                teamMembers: {
                    $elemMatch: req.user
                } 
            }
        );
    
        // check if the team exists
        if(!team) {
            return res.status(400).send({ error: 'No team found' });
        } 
    
        res.status(200).send({ message: 'Team found', teamData: team });
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

module.exports = router;