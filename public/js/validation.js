
const form = document.querySelector('form')
const inputs = [...document.querySelector('form').querySelectorAll('input:not([type=hidden]):not([type=submit]), textArea' )]

const uniqueCodeInput = document.getElementById('unique-code').value

const getCurrentSurvey = (uniqueCode) => localStorage.getItem(uniqueCode)

const progression = () => {
    const currentSurvey = JSON.parse(getCurrentSurvey(uniqueCodeInput))
    const pathname = form.id
    const currentPageData = currentSurvey[pathname]

    console.log(pathname)

    console.log('test', currentPageData)

    inputs.forEach(input => {
        if (input.type === 'text') input.value = currentPageData[input.name]
        else if (input.type === 'radio' && input.value === currentPageData[input.name]) {
            input.checked = true
        }

        
        input.addEventListener('blur', () => {
            const {name, value} = input
            
            currentPageData[name] = value
        
            localStorage.setItem(uniqueCodeInput, JSON.stringify(currentSurvey)) 
        })
     })
}

progression()

const validateInputs = (inputs) => {
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.type === 'text' && !input.pattern.includes('[0-9]+')) {
                if (input.value === '') {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('wrong')
                    label.setAttribute('error-message', 'Please enter a valid input')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.length < 3) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('wrong')
                    label.setAttribute('error-message', 'Must be atleast 3 characters')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.length >= 3 && input.value.match(/^[a-zA-Z0-9\s]*$/)) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('correct')

                    input.style.borderColor = '#937341'
                    document.querySelector('input[type=submit]').disabled = false
                }
            }
            if (input.type === 'text' && input.pattern.includes('[0-9]+')) {
                if (input.value === '') {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('wrong')
                    label.setAttribute('error-message', 'Please enter a valid input')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (!input.value.match(/^[0-9]*$/)) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('wrong')
                    label.setAttribute('error-message', 'Only digits allowed')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.match(/^[0-9]*$/)) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('correct')

                    input.style.borderColor = '#937341'
                    document.querySelector('input[type=submit]').disabled = false
                }
            }
            if (input.type === 'textarea') {
                if (input.value === '') {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('wrong')
                    label.setAttribute('error-message', 'Please enter a valid input')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.length < 3) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('wrong')
                    label.setAttribute('error-message', 'Must be atleast 3 characters')

                    input.style.borderColor = '#be1e37'
                    document.querySelector('input[type=submit]').disabled = true
                } else if (input.value.length >= 3) {
                    const label = input.parentElement

                    label.className = ''
                    label.setAttribute('error-message', '')

                    label.classList.add('correct')

                    input.style.borderColor = '#937341'
                    document.querySelector('input[type=submit]').disabled = false
                }
            }
        })
    });

}

validateInputs(inputs)
