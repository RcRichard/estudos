const ul = document.querySelector('ul')
const button = document.querySelector('button')
const lis = document.querySelectorAll('li')



button.addEventListener('click', () => {
    ul.innerHTML += '<li>Novo item</li>'
})

ul.addEventListener('click' , event =>{
    const clickedElement = event.target
    if(clickedElement.tagName === 'LI' ){
        clickedElement.remove()
    }
})