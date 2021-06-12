require("dotenv").config()

const express = require("express")
const app = express()

const cookieParser = require('cookie-parser')

const catalog = require("./routes/catalog")
const profile = require("./routes/profile")
const search = require("./routes/search")
const auth = require('./middleware/auth');
const login = require("./routes/login")
const logout = require("./routes/logout")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser())
app.use('/login',login)
app.use('/logout',auth,logout)
app.use('/profile',auth,profile)
app.use('/search',auth,search)
app.use('/',auth,catalog)

app.listen(process.env.PORT || 5000, process.env.HOST, () => {
    console.log(`Server is running at http://${process.env.HOST}:${process.env.PORT}/`)
})
