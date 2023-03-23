const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')


const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()

    const isValidUserName = testUsername(event.target.username.value)
    if (isValidUserName) {
        feedback.textContent = 'Username válido =)'
        return
    }

    feedback.textContent = 'User name deve conter entre 6 a 12 caracteres e deve conter apenas letras'
})

form.username.addEventListener('keyup', event => {
    const isValidUserName = testUsername(event.target.value)
    
    if(isValidUserName){
        form.username.setAttribute('class', 'success')
        return
    }

    form.username.setAttribute('class', 'error')
})