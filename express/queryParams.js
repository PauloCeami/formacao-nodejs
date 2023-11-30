const e = require('express');
const express = require('express'); // import express
const app = express(); // iniciando express


//  parametro obrigatorio
app.get('/canal/youtube', function (req, res) {

    //http://localhost:8181/canal/youtube?canal=pauloceami
    var canal = req.query['canal'];
    if (canal) {
        res.send('exibindo canal  : ' + canal);
    } else {
        res.send('parametro invalido');
    }

})


app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});