const storage = require('../modules/storage')

module.exports = ( (req, res) => {
    // Unique user code
    givenCode = req.body.uniqueCode

    // new empty object for the given code.
    const newObj = {
        "code": givenCode,
        "personal": {
            "name": "",
            "surname": "",
            "age": "",
            "gender": "",
            "gamertag": "",
        },
        "game_personal": {
            "favorite-platform": "",
            "average-game-time": "",
            "prefer": "",
            "favorite-game-genre": "",
            "favorite-game": "",
        },
        "open_questions": {
            "favorite-game-of-all-time": "",
            "what-would-you-do": "",
            "into-video-games": "",
        },
        "rate_game": {
            "game-to-judge": "",
            "opinion-about-the-game": "",
            "rate": "",
            "time-spend": "",
            "recommend": "",
        },
    }

    // takes the object and adds it to a json file in the storage map with the unique code as name
    storage.saveNewData(newObj, `./storage/${givenCode}.json`)

    res.render('personal', { uniqueCode: givenCode })
    
})