const storage = require('../modules/storage')

module.exports = (req, res) => {
    

    givenCode = req.body.uniqueCode

    console.log(givenCode)

    const session = storage.getExistingData(`./storage/${givenCode}.json`)

    // sets name for data from personal form
    session["game_personal"] = req.body
    // deletes the unique code out of the game personal section
    delete session["game_personal"].uniqueCode
    // saves new filled in data to json file 
    storage.saveNewData(session, `./storage/${givenCode}.json`)

    res.render('open_questions', { 
        uniqueCode: givenCode,
        answers: session
    })
}