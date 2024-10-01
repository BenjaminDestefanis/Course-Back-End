
// Servidor basico sin la utilizacion de Express --

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');

    if(req.url === '/'){
        res.end('Server Response exit!')

    } else {
        res.statusCode = 400
        res.end('Error, page not found!')
    }
})

const PORT = 3290

server.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})