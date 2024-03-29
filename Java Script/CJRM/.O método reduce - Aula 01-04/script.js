const numbers = [1, 2, 3]


const somNumbers = numbers.reduce((acumulator, item) => acumulator + item, 0)

console.log(somNumbers)

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

const rogerScore = phaseScores.reduce((accumulator, scores) =>{
    if(scores.name === 'Roger Melo'){
        accumulator += scores.score
    }
    return accumulator
}, 0)

console.log(rogerScore)