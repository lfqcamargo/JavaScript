import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; // AJUSTANDO PARA OBTER O TITULO E URL DENTRO DO ARQUIVO
  const capturas = [...texto.matchAll(regex)]; // PEGANDO OS NOMES E LINKS
  const resultados = capturas.map(captura => ({[captura[1]]: captura[2]})) // DEFININDO NOME E LINKS
  return resultados.length !== 0 ? resultados : 'não há links no arquivo'; // RETORNA O RESULTADO
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8'; // PADRÃO
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding) // LEITURA DO ARQUIVO
    return extraiLinks(texto); //4ª CHAMA A FUNÇÃO PASSANDO O CONTEUDO DE DENTRO DO ARQUIVO
  } catch (erro) {
    trataErro(erro)
  } 
}

export default pegaArquivo;
