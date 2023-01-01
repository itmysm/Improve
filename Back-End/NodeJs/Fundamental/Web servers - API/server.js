const fs = require('fs')
const http = require('http')

var mimeTypes =  {
  "html": "text/html",
  "jpeg": "image/jpeg",
  "jpg": "image/jpg",
  "png": "image/png",
  "svg": "image/svg",
  "json": "application/json",
  "javascript": "text/javascript",
  "css": "text/css"
}

http.createServer((req, res) => {
  console.log('listen on port : 8080');

  fs.readFile(__dirname + req.url, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err))
      return
    }

    var mimeType = mimeTypes[req.url.split('.').pop()]

    if (!mimeType) {
      mimeType = 'text/plain'
    }

    res.writeHead(200, { "Content-Type": mimeType})
    res.write(data, "binary");
    res.end();
  })
}).listen(8080);