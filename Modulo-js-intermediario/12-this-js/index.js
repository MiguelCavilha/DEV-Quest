'use strict'

// let usuario = {
//     nome: 'Miguel',
//     saudar: function(){
//         console.log('this no contexto do metodo ', this)

//         console.log('this no contexto do metodo ', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Brocolis',
    temperatura: 0, 
    cozinhar: function(temperaturaDeCozimento){
        this.temperatura = temperaturaDeCozimento;
    }
}

comida.cozinhar = function(temperaturaDeCozimento){
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)