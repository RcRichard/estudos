let n = [1 ,6 , 4, 2, 5]
n.sort()
n.push(8)
console.log(n)
console.log(`O vetor tem ${n.length} posições. `)
console.log(`O primeiro valor do vetor é ${n[0]}`)

var v = n.indexOf(5)

if(v == -1){
    console.log('Valor não encontrado')
}else{
console.log(`O valor esta na posiçao ${v}`)
}