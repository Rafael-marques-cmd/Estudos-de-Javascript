const objs = [
   [
      {
      
           nome: 'Rafael',
           idade: 22,
           esta_trabalhando: false,
           detalhes_profissao:{
           Profissão: null,
           Faculdade: null,
           },
       hobbies: ['Futeboll', 'Vôlei', 'Ler'],
      },
      {
           nome: 'Juvenal',
           idade: 35,
           esta_trabalhando: true,
           detalhes_profissao:{
           Profissão: 'Programador',
           Faculdade: 'Empresa X'
           },
        hobbies: ['Sinuca', 'Futeboll', 'Pescar'],
      }
   ]
]


// JSON
// converter objeto para JSON
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
})