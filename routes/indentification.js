const express = require('express')

const storage = require('../modules/storage')

const indentificationRoute = express.Router()

indentificationRoute.use( (req, res) => {
    // console.log(req, storage)
    // Key that is passed through the start screen
    givenCode = req.body.uniqueCode

    // Looks if the code isn't empty and the file exists. If so the session will exist
    // else it will render the get_code page where users will get a unique code.
    if (givenCode) {
        if(storage.checksIfFileExists(`./storage/${givenCode}.json`)){
            console.log('session exists')
        } else {
            console.log('wrong key')
            res.render("invalid_code")
        }
    } else {
        res.redirect('/get_code')
    }
    
})

module.exports = indentificationRoute