const http = require('http');

const server = http.createServer((req, res) => {
  console.log('response on port: 8080');

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<p>Hello world</p>');
})

server.listen(8080, () => {
  console.log('listen on port: 8080');
})