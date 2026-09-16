const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'TaskFlow API alive' }));
});

server.listen(5000, () => {
  console.log('Listening on http://localhost:5000');
});