const express = require('express')
const storage = require('../modules/storage')
const personalRoute = express.Router()

personalRoute.use( (req, res) => {
    console.log(req, storage)
    // Key that is passed through the start screen
    givenKey = req.body.uniqueCode



    res.render('personal')
})

module.exports = personalRoute