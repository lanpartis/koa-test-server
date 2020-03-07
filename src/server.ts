import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());
let port  = process.env.PORT;
if (port == null || port == "") {
  port = "8000";
}
app.listen(port);

console.log('Server running on port 8000');