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
            /*CORREÇÃO------

            1- Adicionar esses dois comandos abaixo que servem para que quando o usuario clicar em adicionar, o input de adição do numero recebe vazio "camponum.value='' , e o segundo "camponum.focus()" serve para manter o foco no input de adição de numero, então o usuario pode adicionar um novo numero sem ter q clicar outra vez no input, tornando-o mais interativo." */
            camponum.value = ''
            camponum.focus()
        }
    }
}




function finalizar() {

    /*CORREÇÃO------
    
    2- Tirar "camponum.value" e colocar "vetor.length" para a verificação ser feito no Select, verificando se o select esta vazio e nao o campo do primeiro input de adição.*/
    
    if (vetor.length == 0) {
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




// ----------------------------------------RESOLUÇÃO DO EXERCÍCIO SEGUNDO GUANABARA---------------------------


/*(copie o codigo todo abaixo e dê ctrl+K+U para retirar comentarios e testar. )*/






// /*1-   Nessa primeira função sera feito uma verificação no numero "n" q correspode ao parametro adicionado na função de adicionar() onde "n" = camponum.value, para limitar oque o usuario pode colocar no primeiro input de adição de númeoro.

// se (o numeoro digitado for um Number maior ou igual a 1 && for um Number menor ou igual a 100)
// -   ele vai retornar true
// se nao {retorna falso
// }
// */
// function isNumero(n) {
//     if (Number(n) >= 1 && Number(n) <= 100) {
//         return true
//     } else {
//         return false
//     }
// }


// /*2-    Nessa segunda função temos a verificação se o numero digitado ja esta na lista do vetor.

// -   se (na lista 'vetor' o indereço do Number digitado for diferente de -1)
// -   ele vai retornar true
// se nao { retorna falso 
// } */

// function inLista(n, l) {
//     if (l.indexOf(Number(n)) != -1) {
//         return true
//     } else {
//         return false
//     }
// }

// /*Essa é a função de adição de numero ao Select, nessa função temos uma verificação por meio de um içamento das funçoes acima para saber se o numero digitado é um numero entre 1 e 100 "isNumero" e se ele esta em lista, na lista do vetor "inLista".

// se (o numero digitado for um numero entre 1 e 100 && Nao esta em lista)
// -   ele vai execurar o codigo abaixo, adicionando uma option com o texto `Valor "TAL" adicionado`
// */

// function adicionarNum() {
//     if (isNumero(camponum.value) && !inLista(camponum.value, vetor)) {
//         vetor.push(Number(camponum.value))

//         let item = document.createElement('option')
//         item.text = `Valor ${camponum.value} adicionado`
//         selecao.appendChild(item)
//         divres.innerHTML = `<input type="button" value="Finalizar" class="btn" onclick="finalizar()"></input>`
//     } else {
//         window.alert(`Valor invalido ou já encontrado na lista.`)
//     }
//     /*esses dois comandos abaixo serve para que assim que o usuario clicar em adicionar, o input de adição do numero recebe vazio "camponum.value='' , e o segundo "camponum.focus()" serve para manter o foco no input de adição de numero, então o usuario pode adicionar um novo numero sem ter q clicar outra vez no input, tornando-o mais interativo." */
//     camponum.value = ''
//     camponum.focus()
// }


// /*Nessa função, é feito o resumo dos numeoros adicionados...
// A versão do Guanabara tem algumas diferenças...*/
// function finalizar() {
//     if (vetor.length == 0) {
//         window.alert(`Adicione valores antes de finalizar !`)
//     } else {
//         let tot = vetor.length

//         /*Uma das diferenças é que para buscar o maior e o menor numero cadastrado, ele fez um FOR para cada posição em vetor vai haver duas verificações condicional IF...*/
//         /*Para ter saber qual foi o maior numero cadastrado ele fez da seguinte forma:
//         Criou uma variaval let com o nome maior que recebe o elemento da var vetor na posição [0] */
//         let maior = vetor[0]

//         /*E tambem criou uma variavel let onde tambem recebe o elemento da var vetor na posição [0] */
//         let menor = vetor[0]
//         /*Ele tambem criou uma variavel let para a soma que recebe 0 inicialmente, mas vai somando cada elemento que o loop FOR passar por ele a variavel soma*/
//         let soma = 0
//         /*a seguir ele cria a verificação FOR com as duas condicionais usando IF.*/
//         for (pos in vetor) {
//             soma += vetor[pos]
//             if (vetor[pos] > maior) {
//                 maior = vetor[pos]
//             }
//             if (vetor[pos] < menor) {
//                 menor = vetor[pos]
//             }
//         } media = soma / tot
//         divres.innerHTML = ''
//         divres.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
//         divres.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
//         divres.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
//         divres.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
//         divres.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
//     }
// }