//dados da pessoa
let nome = 'Richard'
let idade = 19 
let sexo = 'masculino'
let altura = 170 //em Centímetros
let peso = 70 //em quilogrmas
let nivelAtividade = 'muito-ativo'

//formula
let caloriasDíarias = undefined

if(sexo === 'masculino'){
 caloriasDíarias = (13.75 * peso) + (5 * altura) - (6.76 * idade) + 66.5;
} else{
    caloriasDíarias = (9.56 * peso) + (1.85 * altura) - (4.68 * idade) + 66.5;
}

switch(nivelAtividade){
    case 'sedentario':
    caloriasDíarias *= 1.2
    break
    case 'moderado':
    caloriasDíarias *= 1.55
    break
    case 'ativo':
    caloriasDíarias *= 1.725
    break
    case 'muito-ativo':
    caloriasDíarias *= 1.9
    break
}

console.log(`Olá ${nome} você deve ingerir ${caloriasDíarias}kal por dia!`)
