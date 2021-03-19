const express = require('express')
const gamePersonalRoute = express.Router()

gamePersonalRoute.use( (req, res) => {

    res.render('game_personal')
})

module.exports = gamePersonalRoute