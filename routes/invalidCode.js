const storage = require('../modules/storage')

module.exports = ( (req, res) => { 

    givenCode = req.body.uniqueCode

    // looks if there is a value with the name "again" in the submit and when this is true
    // it will go to the next if statement. Otherways the user has clicked on a new session
    // and goes right away to the else statement.
    if (req.body.hasOwnProperty('again')) {
        
        // checks if the givenCode is available and if it exists in the storage
        if(givenCode && storage.checksIfFileExists(`./storage/${givenCode}.json`)){
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

})