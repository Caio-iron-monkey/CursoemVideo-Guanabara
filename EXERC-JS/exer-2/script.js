function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('msg')
    var imagem = document.getElementById('img')
    var idade = ano - Number(fano.value)

    if (fano.value.length == 0 || fano.value > ano || fano.value <= 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''



        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                imagem.innerHTML = '<img src="img/H-baby.jpg.jpg" alt="img-bebe">';
                //Bebe
            } else if (idade <= 15) {
                imagem.innerHTML = '<img src="img/H-young.jpg.jpg" alt="img-criança">'
                //Criança
            } else if (idade <= 29) {
                imagem.innerHTML = '<img src="img/H-teen.jpg.jpg" alt="img-adolecente">'
                //Adolecente
            } else if (idade <= 50) {
                imagem.innerHTML = '<img src="img/H-man.jpg.jpg" alt="img-adulto">'
                //Adulto
            } else if (idade >= 51) {
                imagem.innerHTML = '<img src="img/H-old.jpg.jpg" alt="img-idoso">'
            }
            //Idoso

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                imagem.innerHTML = '<img src="img/M-baby.jpg.jpg" alt="img-bebe">'
                //Bebe
            } else if (idade <= 15) {
                imagem.innerHTML = '<img src="img/M-young.jpg.jpg" alt="img-criança">'
                //Criança
            } else if (idade <= 29) {
                imagem.innerHTML = '<img src="img/M-teen.jpg.jpg" alt="img-adolecente">'
                //Adolecente
            } else if (idade <= 50) {
                imagem.innerHTML = '<img src="img/M-woman.jpg.jpg" alt="img-adulto">'
                //Adulto
            } else if (idade >= 51) {
                imagem.innerHTML = '<img src="img/M-old.jpg.jpg" alt="img-idoso">'
            }
            //Idoso

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    }






}