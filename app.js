const Koa = require("koa2");
const cors = require("koa2-cors")
const etag = require('koa-etag')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser');
const router = require("./router")
const path = require('path')
const app = new Koa();

const {host, port} = require("./utils/config")
// 调用router中间件
app.use(async (ctx, next) => {
    await next();
    if (parseInt(ctx.status) === 404) {
        ctx.response.redirect("/404")
    }
})

app.use(cors());
app.use(etag());
app.use(bodyParser());
app.use(router.routes(), router.allowedMethods());
app.use(static(path.join(__dirname, '/assets')));


app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})