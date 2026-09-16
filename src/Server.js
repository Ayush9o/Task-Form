const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
 if (req.url === '/api/version') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end('This is a version');
  }
   if (req.url === '/api/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('This is a ping');
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'TaskFlow API alive' }));
});

server.listen(5000, () => {
  console.log('Listening on http://localhost:5000');
});