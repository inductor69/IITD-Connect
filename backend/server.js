require("dotenv").config()

const express = require("express")
const server = express()

const router = require("./routes")

server.use(router)

server.listen(process.env.PORT || 5000, process.env.HOST, () => {
    console.log(`Server is running at http://${process.env.HOST}:${process.env.PORT}/`)
})
