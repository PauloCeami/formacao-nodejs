const conection = require('./model/mysql.conection.js');
const express = require('express'); // import express
const app = express(); // iniciando express
const bodyParser = require('body-parser');

const Pergunta = require('./model/Pergunta.model.js');


async function asyncConection() {
    try {
        await conection.authenticate();
        console.log(' ############################################### Connection mysql successfully ###########################################');
    } catch (error) {
        console.error('Failed conection muysql ::: ', error);
    }
}

// call authenticate method
asyncConection();


// Set the default templating engine to ejs
app.set('view engine', 'ejs');

// permite usar arquivos estaticos
app.use(express.static('public'));

// permite obter dados do form em javascript
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// list all
app.get('/', (req, res) => {
    var title = 'Perguntas - Perguntas e Respostas - NodeJs';
    Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => {
        res.render('perguntas/lista-perguntas', {
            'title': title,
            perguntas: perguntas
        });
    });
});

// create
app.get('/create', (req, res) => {
    var title = 'Home - Perguntas e Respostas - NodeJs';
    Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => {
        res.render('perguntas/form-perguntas', {
            'title': title,
            perguntas: perguntas
        });
    });
});

// store 
app.post('/store', async (req, res) => {
    const perg = await Pergunta.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
    });
    console.log("Pergunta auto-generated ID:", perg.id);
    res.redirect('/');
});



// show
app.get('/show/:id', async (req, res) => {
    var id = req.params.id;
    const pergunta = await Pergunta.findByPk(id, { raw: true });
    var title = pergunta.titulo + ' - NodeJs';
    if (pergunta != null || pergunta != undefined) {
        res.render('perguntas/edit-pergunta', {
            'title': title,
            pergunta: pergunta
        });
    }
});

app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});