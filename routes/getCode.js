const express = require('express')
const getCodeRoute = express.Router()

getCodeRoute.use( (req, res) => {
    res.render('get_code')
})

module.exports = getCodeRoute