const client = require("mongodb").MongoClient(process.env.DATABASE_URL_YEARBOOK,{ useNewUrlParser: true, useUnifiedTopology: true })

const router = require("express").Router()

async ()=>{
    try {
        await client.connect()
        console.log(" connected")
    } catch (error) {
        console.log(`Error in connecting to Database: ${error}`)
    }
}




router.get('/:degree/:year',async (req,res) => {
    const {degree,year} = req.params
    try {
        const data = await client.db(degree).collection(year).find()
    } catch (error) {
        console.log(`Error occured while fetchig data from database: ${error}`)
    }
    res.send(data)
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




