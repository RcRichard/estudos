function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if(hora >= 0 && hora < 12){
        img.src = 'imgs/pexels-yanuar-putut-widjanarko-2171643.jpg'
        document.body.style.background ='rgb(110, 57, 57)'

    } else if (hora >= 12 && hora <18){
        img.src = 'imgs/pexels-guillaume-hankenne-2792070 (1).jpg'
        document.body.style.background ='yellow'

    } else{
        img.src = 'imgs/pexels-pixabay-355465.jpg'
        document.body.style.background ='black'


    }
}