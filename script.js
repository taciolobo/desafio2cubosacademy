const Koa = require('koa');

const server = new Koa();

server.use(ctx);

server.listen(8081, () => {console.log('Sevridor está rodando na port 8081')});