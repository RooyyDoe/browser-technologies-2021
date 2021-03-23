const express = require('express')

const storage = require('../modules/storage')

const gamePersonalRoute = express.Router()

gamePersonalRoute.use( (req, res) => {

    givenCode = req.body.uniqueCode

    console.log(givenCode)

    const session = storage.getExistingData(`./storage/${givenCode}.json`)

    // sets name for data from personal form
    session["personal"] = req.body
    // deletes the unique code out of the personal section
    delete session["personal"].uniqueCode
    // saves new filled in data to json file 
    storage.saveNewData(session, `./storage/${givenCode}.json`)

    res.render('game_personal', { uniqueCode: givenCode })
})

module.exports = gamePersonalRoute