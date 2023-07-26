const http = require('http')        /* PRIMEIRAMENTE IMPORTAMOS O HTTP */
const app = require('./app.js')     /* A SEGUIR IMPORTAMOS O MODULO app */   
const port = process.env.PORT || 3000 /* AQUI DEFINIMOS A PORTA QUE SERÁ UTILIZADA AUTOMATICAMENTE, OU SE NÃO CONSEGUIR IRÁ USAR A PORTA 3000 */
const server = http.createServer(app) /* ATRIBUIMOS O SERVIDOR PARA UMA VARIAVEL E UTILIZANDO AS CONFIGURAÇÕES DE app  */
server.listen(port) /* DEFININDO A PORTA QUE SERA O SERVIDOR */

