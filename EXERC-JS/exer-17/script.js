function gerarTabuada(){

    var inpNumber = document.getElementById('number1');
    var tabu = document.getElementById('selctabuada');

    if(inpNumber.value.length == 0){
        window.alert (`Digite um valor`)
    }else{
        var inpNumberValor = Number(inpNumber.value);
        var c = 1

        tabu.innerHTML=''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${inpNumberValor} x ${c} = ${inpNumberValor*c}`
            item.value = `tabu${c}`
            tabu.appendChild(item)
            c++
        }
    }
}