let num = [50,81,400]


//PARA ADICIONAR UM NOVO ELEMENTO NO ARRAY É SO USAR OS SEGUINTES CODIGOS

num[3] = 6 // quando se sabe o tamanho do array ou é de facil acesso

num.push(7) // quando nao se sabe o tamanha do Array, ele cria um novo elemento e colocar o valor entre        parenteses dentro do Array na ultima posição

//PARA SABER O TAMANHO DO ARRAY, QUANTOS ELEMENTOS COMPOES ESSE ARRAY, USE:
num.length

//PARA ORGANIZAR SEUS ELEMENTOS EM ORDEM CRESCENTE( se forem numeros) DE ACORDO COM AS PRIMEIRA CASA 
num.sort()


console.log(`Nosso vetor esta em ordem crescente: ${num} `)

let pos = num.indexOf(40)
console.log(`o valor 50 esta na posiçãom ${pos}`)