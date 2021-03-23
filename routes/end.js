const storage = require('../modules/storage')

module.exports = ( (req, res) => {

    givenCode = req.body.uniqueCode

    const session = storage.getExistingData(`./storage/${givenCode}.json`)

    // sets name for data from personal form
    session["rate_game"] = req.body
    // deletes the unique code out of the rate game section
    delete session["rate_game"].uniqueCode
    // saves new filled in data to json file 
    storage.saveNewData(session, `./storage/${givenCode}.json`)

    res.render('end')
})