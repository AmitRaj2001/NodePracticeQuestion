//Create a simple NodeJs server that respond with "Hello, world!" to any incoming request


const http = require('http');
const PORT = 3000;


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    res.end('Hello, world!\n');
})
 


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});