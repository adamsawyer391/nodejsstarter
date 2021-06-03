const http = require('http');

const server = http.createServer((req, res) => {
	if(req.url === '/'){
		res.end('Welcome to the home page sucka')
	}
	if (req.url === '/about') {
		res.end('This is the story of us')
	}else{
		res.end(`<h1>Page not found!</h1>`)
	}
	
})
server.listen(5000);