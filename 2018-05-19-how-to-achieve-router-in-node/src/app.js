const http = require('http');
const port = 3000;
const Router = require('./router');

const router = new Router();

router.post('/book/:aid', (req, res) => {
  res.end('111');
  console.log(req.params);
})

const server = http.createServer((req, res) => {
  router.routes()(req, res);
});

server.listen(port);
console.log(`http://localhost:${port}`)