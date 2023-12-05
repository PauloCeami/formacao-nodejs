# Treinamento Formação nodejs

**http**

```
var http = require('http');


http.createServer(function (req, res) {
    res.end("Bem vindo ao servidor node")
}).listen(8181);

```

**Módulos no nodejs - module.exports =**

```
var objetoCliente = {
    'nome': 'Pedro',
    'idade': 16,
    'data_nascimento': '16/10/2023'
}

var objetoNome = 'Esta é uma variavel de nome';


function soma(a, b) {
    return a + b;
}

module.exports = {
    soma,
    objetoCliente,
    objetoNome
}


```

**Query Params**


```

app.get('/canal/youtube', function (req, res) {

    //http://localhost:8181/canal/youtube?canal=pauloceami
    var canal = req.query['canal'];

```


**Request Params**


```

app.get('/produto/:nome?', function (req, res) {

    var nome = req.params.nome;

```


**Definição de Routes**


```

app.get('/', function (req, res) {
    res.send('Bem vindo ao sistema de cadastro');
})

app.get('/cliente', function (req, res) {
    res.send('cadastro de cliente');
})

```