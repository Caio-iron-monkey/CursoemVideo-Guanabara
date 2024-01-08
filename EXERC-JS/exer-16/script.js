
function inserirvalue() {

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')



    var parag = document.getElementById('paragrafo')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados')
    } else {
        parag.innerHTML = 'Contando: <br>'
        var iniciovalor = Number(inicio.value)
        var fimvalor = Number(fim.value)
        var passovalor = Number(passo.value)

// se colocar passo 0 o codico nao adiciona mais 1 ao passo e segue
        if( passovalor <= 0){
           window.alert (`Passo invalido!  Considerando Passo 1`)
            passovalor = 1
        }
// --------------------CONTAGEM CRESCENTE
        if (iniciovalor < fimvalor) {
            for (var i = iniciovalor; i <= fimvalor; i += passovalor) {
                parag.innerHTML += `${i} \u{1F449}  `
            }
// --------------------CONTAGEM DECRESCENTE
        } else {
            for (var i = iniciovalor; i >= fimvalor; i -= passovalor) {
                parag.innerHTML += `${i} \u{1F449} `
            }
        }
        parag.innerHTML += `\u{1F3C1}`


    }
}