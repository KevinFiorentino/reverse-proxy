const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
	console.log('pid', process.pid);
	
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'application/json');
  	res.end(JSON.stringify({ message: 'Reverse proxy NodeJS - NGINX' }));
});

server.listen(port, () => {
  	console.log(`Server running!`);
});
