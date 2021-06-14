const express = require('express');
const router = express.Router();

const client = require("../models/client")
const jwt = require("jsonwebtoken");

router.post('/', async (req,res) => {
    const {_id,password} = req.body;

    if(!_id || !password ){
        res.status(402).send(" provide email and password ");
        return;
    }

    const user = await client.db("users").collection("students").findOne({_id});
    

    if(!user){
        res.sendStatus(401);
        return;
    }

    let token = jwt.sign({ _id }, process.env.TOKEN_SECRET);  // also store year and degree
    const tokenArray = token.split('.');
    
    res.cookie('token', token, { httpOnly: true });

    res.sendStatus(200);
})

module.exports = router
