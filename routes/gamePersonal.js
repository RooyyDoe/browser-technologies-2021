const express = require('express')
const gamePersonalRoute = express.Router()

gamePersonalRoute.use( (req, res) => {

    givenCode = req.body.uniqueCode

    res.render('game_personal', { uniqueCode: givenCode })
})

module.exports = gamePersonalRoute