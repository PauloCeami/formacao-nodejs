const e = require('express');
const express = require('express'); // import express
const app = express(); // iniciando express

app.listen(8181,function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});