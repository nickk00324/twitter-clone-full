const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const secretOrKey = require('../../config/keys').secretOrKey;
const User = require('../../models/User');
const validateLoginInput = require('../../validation/login');
const validateRegisterInput = require('../../validation/register');

router.get('/', (req, res) => {
    res.json('this is the users route');
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    const { id, email, handle } = req.user;
    res.json({
        id,
        email,
        handle
    })
});

router.post('/register', (req, res) => {
    const { handle, password, email } = req.body;
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
    //see if user already exists
    User.findOne({ email })
    .then( user => {
        if(user){
            //throw error bc email already exists
            res.status(400).json( {err: 'user with that email already exists'})
        } else {
            const newUser = new User({
              handle,
              password,
              email
            });
            //convert plain-text password to hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then( user => {
                        const payload = { id: user.id, name: user.name };
                        jwt.sign(
                          payload,
                          secretOrKey,
                          //key to expire in 1 hr
                          { expiresIn: 3600 },
                          (err, token) => {
                            res.json({
                              success: true,
                              token: "Bearer " + token
                            });
                          }
                        );
                    })
                    .catch( err => console.log(err));
                })
            })
        }
    })  
})

router.post('/login', (req, res) => {
    const { password, email } = req.body;
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
    User.findOne( { email } )
    .then( user => {
        if(!user){
            res.status(404).json({ err: "user doesn't exist" })
        } else {
            bcrypt.compare(password, user.password, (err, success) => {
                if(success){
                    const payload = { id: user.id, name: user.name};
                    jwt.sign(
                        payload,
                        secretOrKey,
                        //key to expire in 1 hr
                        {expiresIn: 3600},
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            })
                        }
                    )
                } else {
                    res.status(400).json({err: 'invalid credentials'})
                }
            })
        }
    })
})

module.exports = router;