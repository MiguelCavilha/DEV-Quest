// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 10
//     let anoDenNascimento = 2022 - idade 
//     if(mesDeNascimento > mesAtual) anoDenNascimento -- 
//     imprimir(anoDenNascimento)
// }

// let imprimirAnoDeNascimento = anoDenNascimento => {

//     console.log('Seu ano de nascimento é: ' + anoDenNascimento)
// }

// calcularAnoDeNascimento(30, 11, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function (numero){
      return numero * multiplicador
    }
}


let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar (3))
console.log(triplicar (3))
console.log(quadruplicar (3))