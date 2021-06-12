const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.cookie('token', '', { expires: new Date(0) })
    res.sendStatus(200);
})

module.exports = router