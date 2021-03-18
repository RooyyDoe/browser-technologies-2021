const express = require('express')
const personalRoute = express.Router()

personalRoute.use( (req, res) => {
    res.render('personal')
})

module.exports = personalRoute