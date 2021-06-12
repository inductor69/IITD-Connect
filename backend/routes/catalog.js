const express = require('express');
const router = express.Router();
const client = require('../models/client');

router.get('/:degree/:year/:branch',async (req,res) => {
    const obj1 = req.params;
    const obj2 = {};
    for(let param in obj1){
        if(obj1[param].toLowerCase()!="all"){
            obj2[param] = obj1[param];
        }
    }

    try {
        const data = await client.db("users").collection("students").find(obj2).toArray();
        res.status(200).send(data)
    } catch (error) {
        res.send(error)
    }

})

module.exports = router