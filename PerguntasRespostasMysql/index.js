const express = require('express'); // import express
const app = express(); // iniciando express
const bodyParser = require('body-parser');



// Set the default templating engine to ejs
app.set('view engine', 'ejs');

// permite usar arquivos estaticos
app.use(express.static('public'));

// permite obter dados do form em javascript
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    var title = 'Home - Perguntas e Respostas - NodeJs';

    res.render('perguntas/form-perguntas', {
        'title': title
    });
});


app.post('/store', (req, res) => {

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

})

app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});