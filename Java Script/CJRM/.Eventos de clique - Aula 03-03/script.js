const ul = document.querySelector('ul')
const button = document.querySelector('button')
const lis = document.querySelectorAll('li')

lis.forEach(li => {
li.addEventListener('click', event => {
    const clickedElement = event.target
    clickedElement.remove()
})
})

button.addEventListener('click', ()=>{
    ul.innerHTML += '<li>Novo item</li>'
})