const express = require('express')
const startRoute = express.Router()

startRoute.use( (req, res) => {
    res.render('start')
})

module.exports = startRoute