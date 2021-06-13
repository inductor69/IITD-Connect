const express = require('express');
const router = express.Router();

const client = require('../models/client');

router.get('/', async (req,res) => {
    const _id = req._id;
    try {
        const user = await client.db("users").collection("students").findOne({});
        if(!user){
            res.sendStatus(404)
            return;
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error)
    } 
})

module.exports = router