/*SLICE*/

//arr.slice([inicio[,fim]])

let frutas = ['banana', 'macã', 'laranja', 'uva']

// let frutasExtraidas  = frutas.slice(1,3)

// console.log(frutasExtraidas)

/*SPLICE*/

//frutas.splice(indice,deletecount)

//let frutasExtraidas = frutas.splice(1, 2)

//console.log(frutasExtraidas)

/*ELE REMOVE DE FATO OS ITENS DO ARRAY*/

//console.log(frutas)

let removeEAdicionaFrutas = frutas.splice(1, 2, 'goiaba', 'abacaxi', 'pera')

console.log(frutas)