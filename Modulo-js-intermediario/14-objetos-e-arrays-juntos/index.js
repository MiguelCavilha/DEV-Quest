// let jogo1 = {
//     nome: 'Final Fantasy',
//     genero: 'RPG'
// }

// let jogo2 = {
//     nome: 'Fallout',
//     genero: 'Shotter RPG'
// }

// let jogo3 = {
//     nome: 'FIFA',
//     genero: 'Esportes'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [jogo1, jogo2, jogo3]
// }

// let jogo4 = {
//     nome: 'Asassins Creed',
//     genero: 'ActionRPG'
// }

// videoGame.jogos.push(jogo4)

// console.log(videoGame)

let cliente = {
    nome: 'Miguel',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos:[
            {nome:'FIFA'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0])