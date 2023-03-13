let numberTab = 
document.write(`<h3>Tabuada de ${numberTab}</h3>`)

for (let i = 0; i <= 10; i++) {
    let resultTab = numberTab * i
    let tab = `<P>${numberTab} x ${i} = ${resultTab}</P>`
    document.write(tab)
}