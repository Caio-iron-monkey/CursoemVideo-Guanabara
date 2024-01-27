var camponum = document.getElementById('camponum')
var selecao = document.getElementById('selecaonum')
var divres = document.getElementById('res')
var vetor = []

function adicionarNum() {

    if (camponum.value.length == 0) {
        window.alert('Digite um número primeiro para adiciona-lo. ')
    } else {
        if (camponum.value < 1 || camponum.value > 100) {
            window.alert(`Só são permitidos números de 1 a 100. `)
        } else {

            var numero = Number(camponum.value)
            var invetor = vetor.indexOf(numero)

            vetor.push(numero)

            if (invetor >= 0) {
                window.alert(`O Número ${numero} já foi adicionado, tente outro númeoro`)
            } else {
                for (c = 0; c <= 0; c++) {
                    var item = document.createElement('option')
                    item.text = `Número ${numero} adicionado`
                    item.value = numero
                    selecao.appendChild(item)

                    divres.innerHTML = `<input type="button" value="Finalizar" class="btn" onclick="finalizar()"></input>`

                }
            }
        }
    }
}




function finalizar() {


    if (camponum.value == 0) {
        window.alert(`Adicione pelo menos 1 número para finalizar.`)
    } else {

        var somavetor = 0
        for (var c = 0; c < vetor.length; c++) {
            somavetor += vetor[c]
        }
        var maiorNumero = Math.max(...vetor)
        var menorNumero = Math.min(...vetor)

        divres.innerHTML = `<p>Ao todo foram ${vetor.length} números</p><br>
        <p> O maior valor informado foi ${maiorNumero}.</p><br>
        <p> O menor valor informado foi ${menorNumero}</p><br>
        <p>Somando todos os valores , temos ${somavetor}</p><br>
        <p>A média dos valores digitador é ${somavetor / vetor.length}</p><br>
        `


    }

}

