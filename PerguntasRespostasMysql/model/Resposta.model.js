const Sequelize = require('sequelize');
const conection = require('./mysql.conection.js');
const Pergunta = require('../model/Pergunta.model.js');

const modelName = 'respostas';

const Resposta = conection.define(modelName, {
    resposta: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    pergunta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //     model: Pergunta,
        //     key: "id"
        // }
    }
});

// Resposta.belongsTo(Pergunta,{
//     foreignKey:'pergunta_id',
//     targetKey:'id'
//   })
//   Pergunta.hasOne(Resposta);

Resposta.sync({ force: true }).then(() => {
    console.log('########################################### TABLE resposta CREATED ############################################## ');
});

module.exports = Resposta;