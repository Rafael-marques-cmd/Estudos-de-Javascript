// 1. Problema do Par de Soma
function parDeSoma(nums, alvo) {
  const mapa = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complemento = alvo - nums[i];
    if (mapa.has(complemento)) {
      return [mapa.get(complemento), i]; // índices
    }
    mapa.set(nums[i], i);
  }
  return "Não existe par com essa soma";
}

// 2. Verificação de Palíndromo
function ehPalindromo(str) {
  const limpo = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return limpo === limpo.split("").reverse().join("") ? "Sim" : "Não";
}

// 3. Busca de Número Duplicado
function numeroDuplicado(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }
  return "Não existem números duplicados";
}

// 4. Contagem de Pares Distintos
function contarParesDistintos(nums) {
  const unicos = new Set(nums);
  const n = unicos.size;
  return n * (n - 1); 
}

// 5. Verificação de Anagramas
function saoAnagramas(str1, str2) {
  const formatar = s => s.replace(/[^a-z0-9]/gi, "").toLowerCase().split("").sort().join("");
  return formatar(str1) === formatar(str2) ? "Sim" : "Não";
}



// Exemplos de uso
console.log(parDeSoma([2, 7, 11, 15], 9));  
console.log(ehPalindromo("A man a plan a canal Panama")); 
console.log(numeroDuplicado([1, 3, 4, 2, 5, 3])); 
console.log(contarParesDistintos([1, 2, 3])); 
console.log(saoAnagramas("amor", "roma")); 
