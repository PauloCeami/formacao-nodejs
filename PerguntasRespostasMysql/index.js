const express = require('express'); // import express
const app = express(); // iniciando express

// Express use ejs with view engine
app.set('view engine', 'ejs');

app.get('/:nome?', function (req, res) {

    var nome = req.params.nome;

    res.render('condicionais', {
        nome: nome,
        is_mostrar: false
    });
})


app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});