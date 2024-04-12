// Create web server that listens on port 3000
// It should respond to requests to /comments with a JSON object that represents an array of comments
// Each comment should have a message property with a value of 'Hello' and an author property with a value of 'World'
// The array should contain at least 3 comments

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    const comments = [
      { message: 'Hello', author: 'World' },
      { message: 'Hello', author: 'World' },
      { message: 'Hello', author: 'World' }
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});


