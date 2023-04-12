//exemplo 1 : Ordenando strings
const names = ['Richard', 'Isabela', 'Penha', 'Vagner']
names.sort()
console.log(names)


//exemplo 2 : Ordenando números

const numbers = [10, 20, 5 , 35, 45, 60]
numbers.sort((number1, number2) => number1 - number2 )
console.log(numbers)


//exemplo 3 : Ordenando objetos

const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
  ]

theBigFamily.sort((item1, item2) => item2.score - item1.score)

console.log(theBigFamily)