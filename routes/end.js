const express = require('express')
const endRoute = express.Router()

endRoute.use( (req, res) => {

    givenCode = req.body.uniqueCode
    console.log("test", req.body)

    res.render('end')
})

module.exports = endRoute