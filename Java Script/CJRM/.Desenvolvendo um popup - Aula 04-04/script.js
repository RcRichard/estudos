const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')



button.addEventListener('click', () => {
    popup.style.display = 'block'
})


popup.addEventListener('click', event => {
    const classNameClicked = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
    const exitPopup = classNames.some(classNames =>
        classNames === classNameClicked)

    if (exitPopup) {
        popup.style.display = 'none'
    }

})
