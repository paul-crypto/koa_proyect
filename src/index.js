const koa = require(`koa`);
const apiRoutes = require('./routes/routes');
const bodyParser = require('koa-bodyparser');
const app = new koa();
const PORT = 3000;

app.use(bodyParser());
app.use(apiRoutes.routes());

const server = app.listen(PORT, () =>{
    console.log(`server listening on; http;//localhost:${PORT}`);
});

module.exports = server;