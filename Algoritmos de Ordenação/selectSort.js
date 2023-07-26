const livros = require('./listaLivros');
const menorValor = require('./menorValor');

function ordenando(livros) {
    for (let atual = 0; atual < livros.length - 1; atual++) {
        const resultado = menorValor (livros, atual)
    
        let auxiliar = livros[atual]
        livros[atual] = livros[resultado]
        livros[resultado] = auxiliar
    }
    return livros
}

module.exports = ordenando