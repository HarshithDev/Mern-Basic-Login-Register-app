const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

//Load input values
const validateRegister = require('../../validation/register')
const validateLogin = require('../../validation/login')

//Load user model
const User = require('../../models/User')

router.get('/hi', (req,res) => {
    res.send("Hi")
})

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req,res) => {
    //Form Validation
    const {errors,isValid } = validateRegister(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({email: "Email already Exists"});
        }
        else{
            const NewUser = new User({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            })

        //Hash Password Before saving
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(NewUser.password,salt,(err,hash) => {
                if(err) throw err;
                NewUser.password = hash;
                NewUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err))
            })
        })
        }
    })
} )

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login',(req,res) => {
    //Form Validation
    const {errors,isValid} = validateLogin(req.body);

    //Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Find User by Email
    User.findOne({email}).then(user => {
        if(!user){
            return res.status(404).json({emailNotFound: "Email not found"});
        }

        //Check password
        bcrypt.compare(password,user.password).then(isMatch => {
            if(isMatch){
                //user Matched
                //Create jwt payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                //Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 //1 year
                    },
                    (err,token) => {
                        res.json({
                            success:true,
                            token: "Bearer "+token
                        });
                    }
                );
            } else {
                return res
                .status(400)
                .json({passwordIncorrect: "Please Check Email or Password and try again!"});
            }
        })
    })
})

module.exports = router;