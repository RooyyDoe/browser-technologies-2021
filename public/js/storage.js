// Guide I followed to get this:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability

const input = document.getElementById('get-unique-code')
input.select()

const storageAvailable = () => {
    let storage;
    try {
        storage = window['localStorage'];
        let x = '__storage_test__';
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

if (storageAvailable()) {

    const uniqueCode = document.getElementById('get-unique-code').value
    const newSurvey = {
        code: uniqueCode,
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


    localStorage.setItem(uniqueCode, JSON.stringify(newSurvey)) 

} else (
    console.log('localStorage is not available (Turn it on and refresh!)')
)

