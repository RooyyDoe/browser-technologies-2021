const express = require('express')
const startRoute = express.Router()

startRoute.use( (req, res) => {

    givenCode = req.body.uniqueCode

    res.render('rate_game')
})

module.exports = startRoute