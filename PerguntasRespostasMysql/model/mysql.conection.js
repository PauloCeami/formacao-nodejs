const { Sequelize } = require('sequelize');

const HOST = 'localhost';
const USER = 'root';
const PASSWORD = 'root';
const DB = 'formacaonodejs';
const DIALECT = 'mysql';
const POLLMAX = 5;
const POOMIN = 0;
const POOLACQUIRE = 30000;
const POOLIDLE = 10000;
const PORT = 3306; // port container docker  expose: - 3336

module.exports =  conection = new Sequelize(DB, USER, PASSWORD,
    {
        host: HOST,
        dialect: DIALECT,
        port: PORT, 
        operationsAliases: false,
        pool: {
            max: POLLMAX,
            min: POOMIN,
            acquire: POOLACQUIRE,
            idle: POOLIDLE
        }
    });;