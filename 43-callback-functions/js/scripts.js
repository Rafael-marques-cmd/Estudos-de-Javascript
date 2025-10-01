function exibir(num) {
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2, 5, exibir);

multiplicacao(4, 9, exibir);