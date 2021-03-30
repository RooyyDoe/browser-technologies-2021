const storage = require('../modules/storage')

module.exports = (req, res) => {

    // Unique user code
    givenCode = req.body.uniqueCode

    // new empty object for the given code.
    const newObj = {
        code: givenCode,
        personal: {
            name: "",
            surname: "",
            age: "",
            gender: "",
            favoriteGame: "",
        },
        "game_personal": {
            favoritePlatform: "",
            averageGameTime: "",
            prefer: "",
            favoriteGameGenre: "",
            gamertag: "",
        },
        "open_questions": {
            favoriteGameOfAllTime: "",
            whatWouldYouDo: "",
            intoVideoGames: "",
        },
        "rate_game": {
            opinionAboutTheGame: "",
            rate: "",
            timeSpend: "",
            recommend: "",
        },
    }

    // takes the object and adds it to a json file in the storage map with the unique code as name
    storage.saveNewData(newObj, `./storage/${givenCode}.json`)

    res.render('personal', { 
        uniqueCode: givenCode,
    })

}