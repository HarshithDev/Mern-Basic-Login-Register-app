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
        
    })
} )