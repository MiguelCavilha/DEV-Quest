let usuario = {
    nome:'Miguel',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluido!')
    }

}

usuario.excluir()