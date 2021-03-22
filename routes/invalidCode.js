const express = require('express')

const storage = require('../modules/storage')

const invalidCodeRoute = express.Router()

invalidCodeRoute.use( (req, res) => { 

    givenCode = req.body.uniqueCode

    // looks if there is a value with the name "again" in the submit and when this is true
    // it will go to the next if statement. Otherways the user has clicked on a new session
    // and goes right away to the else statement.
    if (req.body.hasOwnProperty('again')) {
        
        // we check if the code/file is available and then we render in the personal page
        // If not we will rerender the invalid code page where users can try again or start a new session.
        if(givenCode && storage.checksIfFileExists(`./storage/${givenCode}.json`)){
            console.log('session exists')
            res.render('personal', { uniqueCode: givenCode })
        } else {
            console.log('wrong key')
            res.render('invalid_code')
        }
    } else {
        res.redirect('/get_code')
    }

})

module.exports = invalidCodeRoute
