

var objetoCliente = {
    'nome': 'Pedro',
    'idade': 16,
    'data_nascimento': '16/10/2023'
}

var objetoNome = 'Esta é uma variavel de nome';


function soma(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}
module.exports = {
    soma,
    sub,
    mult,
    objetoCliente,
    objetoNome
}