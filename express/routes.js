const e = require('express');
const express = require('express'); // import express
const app = express(); // iniciando express


app.get('/', function (req, res) {
    res.send('Bem vindo ao sistema de cadastro');
})

app.get('/cliente', function (req, res) {
    res.send('cadastro de cliente');
})

app.get('/produto', function (req, res) {
    res.send('cadastro de produtos');
})

app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});