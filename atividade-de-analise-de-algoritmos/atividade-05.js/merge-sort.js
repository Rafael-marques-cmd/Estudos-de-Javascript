function mergeSort(array) {
  if (array.length <= 1) {
    return array; // Caso base: vetor de 1 elemento já está ordenado
  }

  // Encontra o meio do array
  const meio = Math.floor(array.length / 2);

  // Divide o array em duas metades
  const esquerda = array.slice(0, meio);
  const direita = array.slice(meio);

  const esquerdaOrdenada = mergeSort(esquerda);
  const direitaOrdenada = mergeSort(direita);

  // Junta (merge) as duas metades ordenadas
  return merge(esquerdaOrdenada, direitaOrdenada);
}

function merge(esquerda, direita) {
  const resultado = [];
  let i = 0, j = 0;


  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  // Adiciona os elementos restantes (se houver)
  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

const numeros = [38, 27, 43, 3, 9, 82, 10];
console.log("Original:", numeros);
console.log("Ordenado:", mergeSort(numeros));
