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

router.post('/addInfo', async (req,res) => {
    const _id = req._id;
    const {field,value} = req.body
    let response = ""
    try {
        if(field === "interest") {
            response = await client.db("users").collection("students").updateOne({_id},{$set: {interest:value}})
        } else {
            response = await client.db("users").collection("students").updateOne({_id},{$set: {description:value}})
        } 
        if(response["acknowledged"] === false){
            return res.status(405).json({"error":"can not write"})
        } 
        if(response["matchedCount"] != 1){
            return res.status(404).json({"message":"user not found"})
        }
        res.sendStatus(204);
    } catch (error) {
        console.log(error)
        res.status(501).send(error);
    }
})

module.exports = router