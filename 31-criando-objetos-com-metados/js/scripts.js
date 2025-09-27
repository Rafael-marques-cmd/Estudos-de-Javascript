let pessoa = {
    nome: "Juvenal",
    idade: 64,
    falar: function() {
        console.log("Olá, tudo bem?"); 
    },
    soma: function(a, b) {
        return a + b; 
    },
};

console.log(pessoa.nome);

var soma = pessoa.soma(2, 5);

console.log(soma);