//Armazena a referencia da div que vai ser adicionado o relógio
const clockContainer = document.querySelector('.clock-container')

//funçao relógio
const updateClock = () => {

    //armazena a data atual
    const present = new Date()

    //armazena a hora atual
    const hours = present.getHours()

    //armazena os minutos atuais
    const minutes = present.getMinutes()

    //armazena os segundos atuais
    const seconds = present.getSeconds()
    
    //define o HTML que aparecera no index
    //1º - trasformei os valores em 'Strings'
    //2º - adicionei um 0 se o valor conter apenas um caracter
    const clockHtml = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>`

    //adiciocna o HTML no index
    clockContainer.innerHTML = clockHtml
}

//atualiza relogio a cada 1segundo
setInterval(updateClock, 1000)  