function parimp(n) {
    if (n % 2 == 0){
        return 'Par'

    }else{
        return 'Impar'
    }
}

console.log(parimp(42))

/*Nessa função podemos ver q ao fazer a chamada da função com o parametro REAL "42", o parametro FORMAL a cima com o valor de "n" recebe o parametro real e segue a execução do if, q após fazer a divisão e o teste conferindo se o resto da divisão é igual a 0, retorna "Par" caso true ou "Impar" caso for false.*/