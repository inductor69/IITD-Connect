const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.DATABASE_URL_YEARBOOK);

client.connect()


const router = require("express").Router()





router.get('/:degree/:year',async (req,res) => {
    const {degree,year} = req.params
    try {
        
        const data = await client.db(degree).collection(year).findOne({})
        res.send(data)
    } catch (error) {
        console.log(`Error occured while fetchig data from database: ${error}`)   
        res.send({'name':'error','branch':error})
    }   
})

router.get("/:degree/:year/:_id", async (req,res) => {
    const {degree,year,_id} = req.params
    try {
        const data = await client.db(degree).collection(year).findOne({_id})
    } catch (error) {
        console.log(`Error occured while fetchig data from database: ${error}`)   
    }
})

module.exports = router;




