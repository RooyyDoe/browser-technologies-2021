const express = require('express')

const storage = require('../modules/storage')

const startRoute = express.Router()

startRoute.use( (req, res) => {

    givenCode = req.body.uniqueCode

    const session = storage.getExistingData(`./storage/${givenCode}.json`)

    // sets name for data from personal form
    session["open_questions"] = req.body
    // deletes the unique code out of the open question section
    delete session["open_questions"].uniqueCode
    // saves new filled in data to json file 
    storage.saveNewData(session, `./storage/${givenCode}.json`)

    res.render('rate_game', { uniqueCode: givenCode})
})

module.exports = startRoute