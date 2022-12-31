const http = require('http');

console.log('listen on port: 8080');


http.createServer((req, res) => {
  console.log('response on port: 8080');

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<p>Hellloooo world</p>');
}).listen(8080)