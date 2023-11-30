
var somafunc = require('./calc');
var multfunc = require('./multiplas_funcoes');



console.log(somafunc(10, 3))
console.log(multfunc.soma(10, 4))

console.log('Nome: '+multfunc.objetoCliente.nome + '\nIdade: ' + multfunc.objetoCliente.idade + '\nData de Nascimento: ' + multfunc.objetoCliente.data_nascimento)
console.log(multfunc.objetoNome)