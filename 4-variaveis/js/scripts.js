var teste = 1;

console.log(teste);

teste = 'João';

console.log(teste);

// teste = 'Pedro';

//console.log(teste);

//console.log(nome);

var $nome = 'ASd';
var _nome = 'ASD';

var meuPrimeiroNome = 'Rafael';

console.log(meuPrimeiroNome);

let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

meuNome = 'Rafael';

console.log(meuNome);



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite o primeiro número: ", function(n1) {
  readline.question("Digite o segundo número: ", function(n2) {
    const soma = parseInt(n1) + parseInt(n2);
    console.log(`A soma entre ${n1} e ${n2} é ${soma}.`);
    readline.close();
  });
});

for(let i = 0; i <10; i++){

  console.log(i * 2);
}
