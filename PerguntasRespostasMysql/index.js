const conection = require('./model/mysql.conection.js');
const express = require('express'); // import express
const app = express(); // iniciando express
const bodyParser = require('body-parser');

const Pergunta = require('./model/Pergunta.model.js');
const Resposta = require('./model/Resposta.model.js');



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
app.post('/responder-pergunta', async (req, res) => {
    const resp = await Resposta.create({
        resposta: req.body.resposta,
        pergunta_id: req.body.pergunta_id,
    });
    console.log("Resposta auto-generated ID:", resp.id);
    res.redirect('/');
});



// show
app.get('/show/:id', async (req, res) => {
    var id = req.params.id;
    const pergunta = await Pergunta.findByPk(id, { raw: true });
    if (pergunta != null || pergunta != undefined) {

        var title = 'Responder : ' + pergunta.titulo;

        Resposta.findAll({
            where: { pergunta_id: pergunta.id },
            raw: true,
            order: [['id', 'DESC']]
        }).then(respostas => {
            console.log(respostas);

            res.render('perguntas/responder-pergunta', {
                'title': title,
                pergunta: pergunta,
                respostas: respostas
            });
        });
    } else {
        res.redirect('/');
    }
});

function hasmany() {

    const resp = Pergunta.hasMany(Resposta, { as: 'respostas' });

    res.getRespostas();

}

app.listen(8181, function (error) {
    if (error) {
        console.log('Impossícel iniciar o servidor')
    } else {
        console.log('servidor iniciado com sucesso !!')
    }
});