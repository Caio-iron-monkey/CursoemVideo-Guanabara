function adicionarNum() {
    var camponum = document.getElementById('camponum')
    var selecao = document.getElementById('selecaonum')


    if (camponum.value.length == 0) {
        window.alert('Oh meu querido, coloque um número se faz favore...')
    } else {
        // for (let c = 0; c < selecao.size; c++) {
            
        // }
        selecao.innerHTML = `<option value="">Valor ${camponum.value} foi adicionado</option>`
    }


}
