const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
  // Add error handling
  req.on('error', (err) => {
    console.error(err);
  });
  res.on('error', (err) => {
    console.error(err);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Use a process manager like PM2 for better handling of crashes and restarts.