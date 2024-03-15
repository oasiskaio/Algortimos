const lista = [1, 2, 3, 4, 5 ,6 , 7]
let total = lista.length
let maior = lista[0]
let soma = 0

for(let ns in lista){
    soma += lista[ns]
    console.log(soma)
}
/* A variavel soma recebera o valor dela mais o valor do indice de ns na lista
*/
