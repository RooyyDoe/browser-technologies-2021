const storage = require('../modules/storage')

module.exports = ( (req, res) => {

    console.log(req.body)

    givenCode = req.body.uniqueCode

    const session = storage.getExistingData(`./storage/${givenCode}.json`)

    // sets name for data from personal form
    session["personal"] = req.body
    // deletes the unique code out of the personal section
    delete session["personal"].uniqueCode
    // saves new filled in data to json file 
    storage.saveNewData(session, `./storage/${givenCode}.json`)

    res.render('game_personal', { 
        uniqueCode: givenCode,
        answers: session
    })
})