const Sequelize = require('sequelize');
const conection = require('./mysql.conection.js');

const modelName = 'perguntas';

const Pergunta = conection.define(modelName, {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({ force: true }).then(() => {
    console.log('########################################### TABLE PERGUNTAS CREATED ############################################## ');
});
