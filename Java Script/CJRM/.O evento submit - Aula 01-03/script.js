const form = document.querySelector('.signup-form')
const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(userNameInput.value)
})

const userName = 'roger'
const patter = /^[a-z]{6,}$/
const result = patter.test(userName)

console.log(result)