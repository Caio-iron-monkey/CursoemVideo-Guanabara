//Fatorial de "5" = 5 * 4 * 3 * 2 * 1 = 120

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    } return fat
}

//CHAMADA
console.log(fatorial(5))

/*Essa função é para o calculo de fatoriais; ao fazer a chamada da função com um parametro, adicionamos um parametro ao paramentro Formal "n" em seguida, criamos uma variavel "fat" que recebe 1, e usamos a estrutura de repetição "for" para que a variavel "c" seja igual ao numero adicionado a chamada, e enquanto esse numero for maior q 1, subtraimos 1 da let "c"; a variavel "fat" recebe ela mesma vezes a varial "c".
No final, damos um return da variavel fat e finalizamos a função.*/

