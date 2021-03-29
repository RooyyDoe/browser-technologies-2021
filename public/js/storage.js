// Guide I followed to get this:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability


// Checks if localStorage is available
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

if (storageAvailable()) {
    console.log("Storage is available")

    // getting uniqueCode from HTML
    const uniqueCode = document.getElementById('get-unique-code').value
    // Making empty object linked to the uniqueCode for localStorage
    const newSurvey = {
        "code": uniqueCode,
        "personal": {
            "name": "",
            "surname": "",
            "age": "",
            "gender": "",
            "favorite-game": "",
        },
        "game_personal": {
            "favorite-platform": "",
            "average-game-time": "",
            "prefer": "",
            "favorite-game-genre": "",
            "gamertag": "",
        },
        "open_questions": {
            "favorite-game-of-all-time": "",
            "what-would-you-do": "",
            "into-video-games": "",
        },
        "rate_game": {
            "opinion-about-the-game": "",
            "rate": "",
            "time-spend": "",
            "recommend": "",
        },
    }

    localStorage.setItem(uniqueCode, JSON.stringify(newSurvey)) 

    console.log("storage", localStorage)

} else (
    console.log("Storage is not avaiable turn on your Javascript!")
)

