

    function selecao(/*divselecao,indice*/selector){
    // var divselecao = document.getElementsByClassName('divselecao');
    // divselecao = Array.from(divselecao);
        // if (indice >= 0 && indice < divselecao.length){
        //    console.log('elemento no indice', indice, ':', divselecao[indice]);

        // }else{
        //    console.log("indice fora dos limites do array")
        // }
    

    // for( var x = 0; x < divselecao.length; x++){
    //     divselecao[x].classList.toggle('divdestaque')
    // }
    var element = document.querySelector(selector);
        element.classList.toggle("divdestaque");
    
}
// setInterval(selecao, 1500)
