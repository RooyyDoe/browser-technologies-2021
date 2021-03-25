const storage = require('../modules/storage')
const { uid } = require('uid')

module.exports = (req, res) => {
    // creates unique code
    const givenCode = uid(8)

    console.log('newcode:', givenCode)

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
    storage.saveNewData(newObj, `storage/${givenCode}.json`)

    res.render('get_code', { uniqueCode: givenCode })

}