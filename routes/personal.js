// https://www.npmjs.com/package/uid

const express = require('express')
const { uid } = require('uid')

const storage = require('../modules/storage')

const personalRoute = express.Router()

personalRoute.use( (req, res) => {
    // console.log(req, storage)
    // Key that is passed through the start screen
    givenCode = req.body.uniqueCode

    // Looks if the code isn't empty and the file exists. If so the session will exist
    // else we will create a new uniqueCode of for the user. These uniqueCodes will exist out
    // of 11 digits
    if (givenCode && storage.checksIfFileExists(`./storage/${givenCode}.json`)) {
        console.log('session exists')
        res.render('personal', { uniqueCode: givenCode })
    } else {
        const uniqueCode = uid()
        console.log('new code:', uniqueCode)
        res.render('personal', { uniqueCode: uniqueCode })
    }

    
})

module.exports = personalRoute