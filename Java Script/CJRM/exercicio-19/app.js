/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const correctAnswer = ['B', 'B', 'A', 'B']
const form = document.querySelector('.form')
const result = document.querySelector('.resultado')

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswer = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value

    ]

    userAnswer.forEach((userAnswer, index) => {

        if (userAnswer === correctAnswer[index]) {
            score += 25
        }
        result.style.display = 'block'
        result.textContent = score
    })

    scrollTo(0, 0)

    let couter = 0
    const timer = setInterval(() =>{
        if(couter === score){
            clearInterval(timer)
        }
        result.textContent = `Sua pontuação foi de ${couter++}%`
    }, 10)

})