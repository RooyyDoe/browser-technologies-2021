const storage = require('../modules/storage')
const proggression = require('../modules/progression')

module.exports = (req, res) => {
    // console.log(req, storage)
    // Key that is passed through the start screen
    givenCode = req.body.uniqueCode

    console.log(givenCode)

    // Looks if the code isn't empty and the file exists. If so the session will exist
    // else it will render the get_code page where users will get a unique code.
    if (givenCode) {
        if(storage.checksIfFileExists(`./storage/${givenCode}.json`)){
            const session = storage.getExistingData(`./storage/${givenCode}.json`)

            // returns a array of booleans TRUE | FALSE
            const userProgress = proggression(session)

            // checks if the personal questions are filled in or not
            // if so go next ↓
            if (!userProgress[0]) {
				console.log('personal')
				res.render("personal", {
					uniqueCode: givenCode,
                    answers: session
				})
            // checks if the game personal questions are filled in or not    
            // if so go next ↓
			} else if (!userProgress[1]) {
				console.log('game-personal')
				res.render("game_personal", {
					uniqueCode: givenCode,
                    answers: session
				})
            // checks if the open questions are filled in or not       
            // if so go next ↓
			} else if (!userProgress[2]) {
				console.log('open-questions')
				res.render("open_questions", {
					uniqueCode: givenCode,
                    answers: session
				})
            // checks if the rate game questions are filled in or not    
            // if so go next ↓
            } else if (!userProgress[3]) {
				console.log('rate-game')
				res.render("rate_game", {
					uniqueCode: givenCode,
                    answers: session
				})
            // if everything is filled in the user sees the end screen
			} else {
				console.log('end')
				res.render('end')
			}
        } else {
            // appears when the wrong unique code is filled in
            console.log('wrong key')
            res.render("invalid_code")
        }
    } else {
        res.redirect('/get_code')
    }
    
}