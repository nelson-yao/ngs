const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hey there this is Dog\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
