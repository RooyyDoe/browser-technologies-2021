const storage = require('../modules/storage')

module.exports = ( (req, res) => {

    givenCode = req.params.id

    const session = storage.getExistingData(`./storage/${givenCode}.json`)

    res.render('rate_game', {
        uniqueCode: givenCode,
        answers: session
    })
})