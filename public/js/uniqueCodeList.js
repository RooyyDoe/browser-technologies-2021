// Guide I followed to get this:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability

const storageAvailable = () => {
    let storage;
    try {
        storage = window['localStorage'];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

const getAllSurveys = () => Object.entries(localStorage)

if (storageAvailable()) { 
    const surveys = getAllSurveys()

    if(surveys) {

        const wrapper = document.getElementById('form-section')
        const uniqueCodeInput = document.getElementById('unique-code')

        const availableSurveys = document.createElement('p')
        const perviousSurveyList = document.createElement('ul')

        availableSurveys.textContent = 'Do you want to continue with your previous survey?'
        availableSurveys.id = 'available-surveys'

        wrapper.append(availableSurveys)
        wrapper.append(perviousSurveyList)

        surveys.forEach(survey => {

            const {code, 
                personal: {name, surname, favoriteGame }, 
                game_personal: {gamertag}, 
                open_questions: {intoVideoGames},
                rate_game: {recommend}} = JSON.parse(survey[1])

            const surveyListItem = document.createElement('li')
            const progression = document.createElement('progress')
            const progressionLabel = document.createElement('label')
            const id = document.createElement('p')
            const username = document.createElement('p')
            const game = document.createElement('p')

            if(name && favoriteGame) {
                username.textContent = 'Name: ' + name + ' ' + surname
                game.textContent = 'Game: ' + favoriteGame

                surveyListItem.append(username, game)
                perviousSurveyList.append(surveyListItem)
            } else if (!name && favoriteGame) {
                id.textContent = 'Unique Code: ' + code
                game.textContent = 'Game: ' + favoriteGame

                surveyListItem.append(id, game)
                perviousSurveyList.append(surveyListItem)
            } else if (name && !favoriteGame) {
                username.textContent = 'Name: ' + name + ' ' + surname
                id.textContent = 'Unique Code: ' + code

                surveyListItem.append(username, id)
                perviousSurveyList.append(surveyListItem)
            } else {
                id.textContent = 'Unique Code: ' + code
                surveyListItem.append(username, id)
                perviousSurveyList.append(surveyListItem)
            }

            if (code && !favoriteGame && !gamertag && !intoVideoGames && !recommend) {
                progressionLabel.textContent = 'Just started'
                progression.value = 0
                progression.max = 100
            } else if (code && favoriteGame && !gamertag && !intoVideoGames && !recommend){
                progressionLabel.textContent = 'You are at 25 % '
                progression.value = 25
                progression.max = 100
            } else if (code && favoriteGame && gamertag && !intoVideoGames && !recommend){
                progressionLabel.textContent = 'You are at 50 % '
                progression.value = 50
                progression.max = 100
            } else if (code && favoriteGame && gamertag && intoVideoGames && !recommend){
                progressionLabel.textContent = 'You are at 75 % '
                progression.value = 75
                progression.max = 100
            } else if (code && favoriteGame && gamertag && intoVideoGames && recommend) {
                progressionLabel.textContent = 'This survey is done'
                progression.value = 100
                progression.max = 100
                localStorage.removeItem(code);
            }

            progressionLabel.id = 'progression-label'
            surveyListItem.id = 'survey-l-items'
            surveyListItem.readonly = true
            surveyListItem.tabIndex = 0

            surveyListItem.append(progressionLabel, progression)

            surveyListItem.addEventListener('click', e => uniqueCodeInput.value = code)
            surveyListItem.onkeyup = (e) =>{
                if(e.code === 'Space'){
                    uniqueCodeInput.value = code
                    document.getElementById("unique-code").focus();
                }
            }
        });
    }
} else {
    console.log('localStorage is not available (Turn it on and refresh!)')
}


