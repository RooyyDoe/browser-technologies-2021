const storage = require('../modules/storage')

module.exports = (req, res) => {

    givenCode = req.params.id

    const session = storage.getExistingData(`./storage/${givenCode}.json`)

    res.render('open_questions', {
        uniqueCode: givenCode,
        answers: session
    })
}