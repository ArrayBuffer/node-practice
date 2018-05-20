const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/book/:aid/:bid', async (ctx, next) => {
  ctx.body = ctx.params.id || 'meiyou';
});

const routes = router.routes();

app.use(routes);

app.listen(8000);