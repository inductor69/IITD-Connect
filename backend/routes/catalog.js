const express = require('express');
const router = express.Router();
const client = require('../models/client');

router.get('/:degree/:year/:branches',async (req,res) => {
    const _id = req._id
    let {degree,year,branches} = req.params
    branches = branches.split(",")
    const obj2 = {};

    obj2["_id"] = {$ne: _id}

    if(degree!="all"){
        obj2["degree"] = degree
    }
    if(year!="all"){
        obj2['year'] = year
    }
    if(branches.length == 1){
        if(branches[0] != "all"){
            obj2["branch"] = branches[0]
        } 
    }else{
        if(!branches.includes("all")){ 
            obj2["branch"] = { $in: branches}   // w/o using JSON.parse() it is 
        } 
    }

    try {
        const data = await client.db("users").collection("students").find(obj2).toArray();
        if(data.length == 0){
            res.status(404).send(data)
            return
        }
        res.status(200).send(data)
        return
    } catch (error) {
        res.status(400).send(error)
        return
    }

})

module.exports = router