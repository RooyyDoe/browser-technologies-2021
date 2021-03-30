
const form = document.querySelector('form')
const inputs = [...document.querySelector('form').querySelectorAll('input:not([type=hidden]):not([type=submit]), textArea' )]

const uniqueCodeInput = document.getElementById('unique-code').value

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

    const getCurrentSurvey = (uniqueCode) => localStorage.getItem(uniqueCode)

    const progression = () => {
        const currentSurvey = JSON.parse(getCurrentSurvey(uniqueCodeInput))
        const pathname = form.id
        const currentPageData = currentSurvey[pathname]

        inputs.forEach(input => {
            if (input.type === 'text') input.value = currentPageData[input.name]
            else if (input.type === 'radio' && input.value === currentPageData[input.name]) {
                input.checked = true
            } else if (input.type === 'textarea') input.value = currentPageData[input.name]
            
            input.addEventListener('blur', () => {
                const {name, value} = input
                
                currentPageData[name] = value
            
                localStorage.setItem(uniqueCodeInput, JSON.stringify(currentSurvey)) 
            })
        })
    }

progression()

} else {
    console.log('localStorage is not available (Turn it on and refresh!)')
}



const validateInputs = (inputs) => {
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.type === 'text' && !input.pattern.includes('[0-9]+')) {
                if (input.value === '') {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('invalid')
                    label.setAttribute('error-message', 'Please enter a valid input')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.length < 3) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('invalid')
                    label.setAttribute('error-message', 'Must be atleast 3 characters')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.length >= 3 && input.value.match(/^[a-zA-Z0-9\s]*$/)) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('valid')

                    input.style.borderColor = '#937341'
                    document.querySelector('input[type=submit]').disabled = false
                }
            }
            if (input.type === 'text' && input.pattern.includes('[0-9]+')) {
                if (input.value === '') {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('invalid')
                    label.setAttribute('error-message', 'Please enter a valid input')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (!input.value.match(/^[0-9]*$/)) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('invalid')
                    label.setAttribute('error-message', 'Only digits allowed')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.match(/^[0-9]*$/)) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('valid')

                    input.style.borderColor = '#937341'
                    document.querySelector('input[type=submit]').disabled = false
                }
            }
            if (input.type === 'textarea') {
                if (input.value === '') {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('invalid')
                    label.setAttribute('error-message', 'Please enter a valid input')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.length < 3) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('invalid')
                    label.setAttribute('error-message', 'Must be atleast 3 characters')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.length >= 3) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('valid')

                    input.style.borderColor = '#937341'
                    document.querySelector('input[type=submit]').disabled = false
                }
            }
        })
    });

}

validateInputs(inputs)

