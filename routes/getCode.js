const express = require('express')
const { uid } = require('uid')

const getCodeRoute = express.Router()

getCodeRoute.use( (req, res) => {
    // creates unique code
    const uniqueCode = uid()
    console.log('new code:', uniqueCode)

    res.render('get_code', { uniqueCode })

})

module.exports = getCodeRoute