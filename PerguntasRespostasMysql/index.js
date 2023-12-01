const express = require('express'); // import express
const app = express(); // iniciando express


// Set the default templating engine to ejs
app.set('view engine', 'ejs');

// permite usar arquivos estaticos
app.use(express.static('public'));

app.get('/', function (req, res) {

    var title = 'Home - Perguntas e Respostas - NodeJs';

    res.render('perguntas/form-perguntas', {
        'title': title
    });
});


app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});