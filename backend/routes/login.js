const express = require('express');
const router = express.Router();

const client = require("../models/client")
const jwt = require("jsonwebtoken");

router.post('/', async (req,res) => {
    console.log("requested /login")
    const {_id,password} = req.body;

    if(!_id || !password ){
        res.status(402).send(" provide email and password ");
    }

    const user = await client.db("users").collection("students").findOne({_id});
    console.log(" user found in /login")
    console.log(user)

    if(!user){
        res.status(422).send({error:"user not found"});
    }

    let token = jwt.sign({ _id }, process.env.TOKEN_SECRET);  // also store year and degree
    const tokenArray = token.split('.');
    
    res.cookie('token', token, { httpOnly: true });

    res.status(200).json({ token });
})

module.exports = router
