const listaLivros = require ('./array.js')

function mergeSort(array, nivelAninhamento = 0) {
  console.log(`Nivel de Aninhamento: ${nivelAninhamento}`)
  console.log(array)
  console.log('===================================================================')

  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1)
    nivelAninhamento = 0
    console.log(`PARTE 1: ${parte1}`)
    console.log('===================================================================')
    
    const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1)
    console.log(`PARTE 2: ${parte2}`)
    console.log('===================================================================')
    array = ordenar(parte1, parte2)
  }

  return array
}

function ordenar(parte1, parte2) {
  console.log('entrou no ordenar')
  let posicaoAtualParte1 = 0 
  let posicaoAtualParte2 = 0
  const resultado = []

  while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
    let produtoAtualParte1 = parte1[posicaoAtualParte1]
    let produtoAtualParte2 = parte2[posicaoAtualParte2]

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1)
      posicaoAtualParte1++
    } else {
      resultado.push(produtoAtualParte2)
      posicaoAtualParte2++
    }
  }

  return resultado.concat(posicaoAtualParte1 < parte1.length
    ? parte1.slice(posicaoAtualParte1)
    : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros))