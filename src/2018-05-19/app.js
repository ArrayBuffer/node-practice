const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('hello world');
});

server.listen(port);
console.log(`http://localhost:${port}`)