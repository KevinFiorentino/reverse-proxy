const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {	
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'application/json');
  	res.end(JSON.stringify({ message: `Reverse proxy NodeJS/NGINX - Process ID = ${process.pid}` }));
});

server.listen(port, () => {
  	console.log(`Server running!`);
});
