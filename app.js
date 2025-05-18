const http = require('http');
const port = 3000;

http.createServer((req, res) => {
  res.write('Hello from EC2!');
  res.end();
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
