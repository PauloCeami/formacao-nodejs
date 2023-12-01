const express = require('express'); // import express
const app = express(); // iniciando express

// Express use ejs with view engine
app.set('view engine', 'ejs');

app.get('/:nome?', function (req, res) {

    var nome = req.params.nome;

    res.render('foreach', {
        nome: nome,
        is_mostrar: false,
        produtos: [
            {
                produto_id: 1,
                produto_nome: 'doritos',
                produto_preco: 5.99,
                produto_estoque: 15

            },
            {
                produto_id: 2,
                produto_nome: 'rufles',
                produto_preco: 7.99,
                produto_estoque: 25

            },
            {
                produto_id: 3,
                produto_nome: 'fandangos',
                produto_preco: 10.99,
                produto_estoque: 36

            }
        ]

    });
})


app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});