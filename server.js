const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * Senior Engineer Note:
 * This server uses native Node.js modules only. 
 * No 'npm install' is required. This is the most stable way to deploy 
 * on restricted cPanel environments.
 */

const server = http.createServer((req, res) => {
  // Normalize URL to serve index.html for all routes (Single Page App behavior)
  const filePath = path.join(__dirname, 'index.html');
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading index.html');
      return;
    }
    res.writeHead(200, { 
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache'
    });
    res.end(content, 'utf-8');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`EasyRidePk Server running on port ${PORT}`);
});