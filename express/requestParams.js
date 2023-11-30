const e = require('express');
const express = require('express'); // import express
const app = express(); // iniciando express


//  parametro obrigatorio
app.get('/cliente/:id', function (req, res) {
    res.send('exibindo cliente : ' + req.params.id);
})



//  parametro opcional
app.get('/produto/:nome?', function (req, res) {

    var nome = req.params.nome;
    if (nome) {
        res.send('exibindo produto : ' + nome);
    } else {
        res.send('tudo bemm.. listando todos os produtos');
    }


})



app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});