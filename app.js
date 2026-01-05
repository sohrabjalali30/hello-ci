const http = require('http');
const server = http.createServer((req, res) => res.end('Hello CI'));
server.listen(3000);
module.exports = server;
