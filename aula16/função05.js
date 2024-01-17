//RECURSIVIDADE

/*
Sabemos que:

o fatorial de 5... 5! = 5 * 4 * 3 * 2 * 1
logo percebemos que ... 5! = 5 * 4!

n! = n * (n -1)! numero fatorial é igual ao numero vezes o ( numero -1 ) fatorial.
Exceto 1, pq :
1! = 1

*/

function fatorial(n){
    if( n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))