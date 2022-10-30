let frutas = ['Banana', 'Maçã', 'Laranja', 'Pêra' ]
let frutasTamanho = frutas.length

/*METODO MAIS TRADICIONAL POREM MENOS LEGIVEL DE ITERAR UM ARRAY*/

// for (let i = 0; i < frutasTamanho; i++){
//       console.log('Fruta: ' + frutas[i])
// }

/*MELHOR METODO PARA ITERAR UM ARRAY*/

// frutas.forEach(function(item){
//     console.log('Frutas: ' + item)
// })

/*ADICIONA UM ITEM NO FINAL DO ARRAY*/

//frutas.push('Manga')

/*RETIRA UM ITEM NO ARRAY*/

//frutas.pop()

/*RETIRA O PRIMEIRO ELEMENTO DO ARRAY*/

//frutas.shift()

/*ADICIONA UM ELEMENTO NO COMEÇO DO ARRAY*/

//frutas.unshift('Morango')

/*PROCURA A POSIÇÃO DE UM ITEM DENTRO DO ARRAY*/

let posicaoLaranja = frutas.indexOf('Laranja')

console.log(posicaoLaranja)