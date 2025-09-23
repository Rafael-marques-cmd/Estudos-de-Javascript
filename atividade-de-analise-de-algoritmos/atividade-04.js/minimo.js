function trocoMinimo(V, moedas = [100, 50, 25, 10, 5, 1]) {
  let count = 0;
  let restante = V;

  for (let moeda of moedas) {
    if (restante >= moeda) {
      let qtd = Math.floor(restante / moeda);
      count += qtd;
      restante -= qtd * moeda;
    }
  }

  return count;
}

// Exemplo:
let valor = 289;
console.log(`Troco para ${valor}: ${trocoMinimo(valor)} moedas`);
