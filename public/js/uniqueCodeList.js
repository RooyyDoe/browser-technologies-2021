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

const getUniqueCodes = () => {
	let uniqueCodes = Object.keys(localStorage)
    console.log('showCodes', uniqueCodes)
    return uniqueCodes
}

if (storageAvailable()) { 
    const uniqueCodes = getUniqueCodes()

    if(uniqueCodes) {
        const wrapper = document.getElementById('form-section')
        const uniqueCodeInput = document.getElementById('unique-code')

        const availableCodes = document.createElement('p')
        const uniqueCodeList = document.createElement('ul')

        availableCodes.textContent = 'These codes are available to re-use:'
        availableCodes.id = 'available-codes'

        wrapper.append(availableCodes)
        wrapper.append(uniqueCodeList)

        uniqueCodes.forEach(code => {

            const uniqueCodeListItem = document.createElement('li')
            const uniqueCodeItem = document.createElement('input')

            uniqueCodeItem.textContent = code
            uniqueCodeItem.id = 'unique-codes-l-items'
            uniqueCodeItem.value = code
            uniqueCodeItem.readOnly = true

            uniqueCodeList.append(uniqueCodeListItem)
            uniqueCodeListItem.append(uniqueCodeItem)

            uniqueCodeItem.addEventListener('click', e => uniqueCodeInput.value = e.target.value)
            uniqueCodeItem.onkeyup = (e) =>{
                if(e.code === 'Space'){
                    uniqueCodeInput.value = e.target.value
                }
            }
        });
    }
} else {

}


