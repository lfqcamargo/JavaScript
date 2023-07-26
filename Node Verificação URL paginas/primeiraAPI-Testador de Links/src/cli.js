// importações de outros documentos e api
import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';
import listaValidada from './http-validacao.js';
//

const caminho = process.argv; // DEFININDO O CAMINHO DO ARQUIVO

async function imprimeLista(valida, resultado, identificador = '') { // 5ª MONTANDO OS OBJETOS 
  if (valida) { 
    console.log(
    chalk.yellow('lista validada'),
    chalk.black.bgGreen(identificador),
    await listaValidada(resultado));    
  } else {
      console.log(
      chalk.yellow('lista de links'),
      chalk.black.bgGreen(identificador),
      resultado);
  }
}


async function processaTexto(argumentos) { // 2ª VERIFICANDO INFORMAÇÕES DO CAMINHO
  const caminho = argumentos[2]; // PASSANDO A POSIÇÃO DA ONDE FICA O CAMINHO
  const valida = argumentos[3] === '--valida'; // CONFIGURAÇÃO FEITA NO JSON

  // INICIO DE TESTE DE VALIDAÇÃO PARA SE EXISTE OU NÃO O CAMINHO
  try {
    fs.lstatSync(caminho);
  } catch (erro) {
    if (erro.code === 'ENOENT') {
      console.log('arquivo ou diretório não existe');
      return;
    }
  }
  // FIM DA VALIDAÇÃO

  
  if (fs.lstatSync(caminho).isFile()) { // VERIFICA SE É UM ARQUIVO OU UM DIRETORIO
    const resultado = await pegaArquivo(argumentos[2]); // 3ª CHAMA A FUNÇÃO PASSANDO COMO PARAMETRO DO ARQUIVO
    imprimeLista(valida, resultado); // 5ª CHAMA A FUNÇÃO PASSANDO O RESULTADO DA FUNÇÃO EXTRAIR LINKS QUE FOI CHAMADA PELO PEGAARQUIVOS + VARIAVEL CONFIGUIRADA PELO JSON
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho) // PASSANDO TODOS OS NOMES DOS ITENS DENTRO DO CAMINHO PARA UM ARRAY
    arquivos.forEach(async (nomeDeArquivo) => { // 3ª FAZ COM QUE CADA ARQUIVO DENTRO DO CAMINHO
      const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`) // CHAME A FUNÇÃO PASSANDO COMO PARAMETRO O DO CAMINHO + O NOME DO ARQUIVO
      imprimeLista(valida, lista, nomeDeArquivo) // 5ª CHAMA A FUNÇÃO PASSANDO O RESULTADO DA FUNÇÃO EXTRAIR LINKS QUE FOI CHAMADA PELO PEGAARQUIVOS + VARIAVEL CONFIGUIRADA PELO JSON
    })
  }
}

processaTexto(caminho); // 1ª COMEÇANDO O SCRIPT, CHAMANDO A PRIMEIRA FUNÇÃO