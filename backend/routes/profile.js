const express = require('express');
const router = express.Router();

const client = require('../models/client');

router.get('/:id', async (req,res) => {
    const _id = req.params.id;
    try {
        const user = await client.db("users").collection("students").findOne({_id});
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error)
    } 
})

module.exports = router