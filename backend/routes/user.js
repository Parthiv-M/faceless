const express = require('express');
const router = express.Router();
const User = require('./../models/User');
const Team = require('./../models/Team');
const bcrypt = require('bcryptjs');
const authenticate = require('./../middleware/authenticate');
const { check, validationResult } = require('express-validator');

// route to sign up 
router.post('/signUp',
    [
        check('email', 'Enter a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
    
    // checks for validation result
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        var user = new User({
            userName: req.body.userName,
            email: req.body.email,
            registrationNum: req.body.regNum,
            password: req.body.password,
            college: req.body.college
        });
        // saves the user to database
        user.save().then(() => {
            const payload = {
                user: {
                  userId: user._id,
                  userName: user.userName
                }
            };
            token = user.generateAuthToken(payload);
            res.setHeader('x-auth-token', token);
            res.status(200).send({ message: "Sign up successful" });
        }
        ).catch((err) => {
            res.status(403).send({ error: 'Oops, error creating user', path: err.keyPattern });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Server error' });
    }
});

// route to create a team
router.post('/createTeam', authenticate, (req, res) => {
    
    // generating a random team code
    var teamCode = Math.floor(Math.random() * 100) + 100;
    teamCode = teamCode + req.user.userName.split('')[0] + req.user.userName.split('')[1] + req.user.userName.split('')[2];
    var team = new Team({
        teamCode: teamCode,
        teamName: req.body.teamName,
        teamMembers: req.user
    });
    try {
        // saves the team to database
        team.save().then(async() => {
            await User.findOneAndUpdate(
                { _id: req.user.userId },
                {
                    $set: {
                        teamCode: team.teamCode
                    }
                }
            );
            res.status(200).send({ message: 'Team created successfully' });
        });        
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

// route to join a team with team code
router.post('/joinTeam', authenticate, async(req, res) => {
    const toJoinUserId = req.user.userId;
    const teamCode = req.body.teamCode;
    try {
        await Team.findOneAndUpdate(
            { teamCode: teamCode },
            {   
                $push: {
                    teamMembers: {
                        userId: toJoinUserId,
                        userName: req.user.userName
                    }
                }
            }
        ).then(async(team) => {
            await User.findOneAndUpdate(
                { _id: toJoinUserId },
                {
                    teamCode: teamCode
                }
            );
            res.status(200).send({ message: 'Team joined successfully', teamName: team.teamName });
        }).catch((err) => {
            return res.status(401).send({ error: 'No such team exists' });
        });
    } catch (error) {
        res.status(500).send({ error: 'Server error' });
    }
});

// route to sign in with user credentials
router.post('/signIn', 
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
    
    // checks for validation result
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const { email, password } = req.body;

        // check if user exists in the database
        let user = await (await User.findOne({ email }));
        if (!user) {
            return res.status(400).json({
                errors: [{ msg: 'Invalid Credentials' }]
            });
        }
        
        // check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
               errors: [{ msg: 'Invalid Password' }]
            });
        }

        const payload = {
            user: {
              userId: user._id,
              userName: user.userName
            }
        };

        token = user.generateAuthToken(payload);
        res.setHeader('x-auth-token', token);
        res.status(200).send({ message: "Login successful" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Server error' });
    }
});

module.exports = router;