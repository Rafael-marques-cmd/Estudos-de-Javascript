function atividadesCompativeis(atividades) {
  // Ordena as atividades pelo horário de término
  atividades.sort((a, b) => a.fim - b.fim);

  let selecionadas = [];
  let ultimoFim = 0;

  for (let atividade of atividades) {
    if (atividade.inicio >= ultimoFim) {
      selecionadas.push(atividade);
      ultimoFim = atividade.fim;
    }
  }

  return {
    maxAtividades: selecionadas.length,
    lista: selecionadas
  };
}

// Exemplo:
let atividades = [
  { nome: "A1", inicio: 1, fim: 3 },
  { nome: "A2", inicio: 2, fim: 5 },
  { nome: "A3", inicio: 4, fim: 6 },
  { nome: "A4", inicio: 6, fim: 7 },
  { nome: "A5", inicio: 5, fim: 8 },
  { nome: "A6", inicio: 8, fim: 9 }
];

let resultado = atividadesCompativeis(atividades);
console.log(`Máximo de atividades: ${resultado.maxAtividades}`);
console.log("Selecionadas:", resultado.lista.map(a => a.nome));
