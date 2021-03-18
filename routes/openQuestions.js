const express = require('express')
const startRoute = express.Router()

startRoute.use( (req, res) => {
    res.render('open_questions')
})

module.exports = startRoute