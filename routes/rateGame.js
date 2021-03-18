const express = require('express')
const startRoute = express.Router()

startRoute.use( (req, res) => {
    res.render('rate_game')
})

module.exports = startRoute