function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro, selecione corretamente os dados solicitados!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    } if (fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'imgs/bebe-menino.jpg')
        } else if(idade < 22){
            //joven
            img.setAttribute('src', 'imgs/jovem-homem.jpg')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'imgs/homem-adulto.jpg')
        } else { 
            //idoso
            img.setAttribute('src', 'imgs/idoso-homem.jpg')
        }

    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', 'imgs/bebe-menina.jpg')
        } else if(idade < 22){
        //joven
        img.setAttribute('src', 'imgs/jovem-mulher.jpg')
        } else if (idade < 50){
        //adulto
        img.setAttribute('src', 'imgs/mulher-adulta.jpg')
        } else { 
        //idoso
        img.setAttribute('src', 'imgs/idosa-mulher.jpg')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}