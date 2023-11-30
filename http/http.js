var http = require('http');


http.createServer(function (req, res) {
    res.end("Bem vindo ao servidor node")
}).listen(8181);