module.exports = (session) => { 

    // the standard will an empty question form
    let anwsers = 0
    // for each entry we look if the second value of the array is not empty (second value is the answer)
    // if the question is filled in one will be added to the "answer" value
    Object.entries(session.personal).forEach(entry => {
		if (entry[1]) {
			anwsers++
		}
	})
    // This wil check if all the questions are filled in and then returns a boolean variable TRUE | FALSE
    const personal = (anwsers === Object.entries(session.personal).length)

    // set the answer value back to 0
    anwsers = 0
    
    Object.entries(session.game_personal).forEach(entry => {
		if (entry[1]) {
			anwsers++
		}
	})
    const gamePersonal = (anwsers === Object.entries(session.game_personal).length)

    anwsers = 0
    
    Object.entries(session.open_questions).forEach(entry => {
		if (entry[1]) {
			anwsers++
		}
	})
    const openQuestions = (anwsers === Object.entries(session.open_questions).length)

    anwsers = 0
    
    Object.entries(session.rate_game).forEach(entry => {
		if (entry[1]) {
			anwsers++
		}
	})
    const rateGame = (anwsers === Object.entries(session.rate_game).length)

    // returns all the values
    return [personal, gamePersonal, openQuestions, rateGame]
}