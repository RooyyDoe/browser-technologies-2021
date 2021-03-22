// https://www.npmjs.com/package/uid

const express = require('express')
const { uid } = require('uid')

// const storage = require('../modules/storage')

const personalRoute = express.Router()

personalRoute.use( (req, res) => {
    // Unique user code
    givenCode = req.body.uniqueCode
    
})

module.exports = personalRoute