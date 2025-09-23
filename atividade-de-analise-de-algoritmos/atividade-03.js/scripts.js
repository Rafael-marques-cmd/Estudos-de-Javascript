function existeCaminho(grid) {
  if (!grid || grid.length === 0) return "Não";

  const n = grid.length;
  // checa forma quadrada mínima
  if (!Array.isArray(grid[0]) || grid[0].length !== n) {
    throw new Error("A matriz deve ser n x n");
  }

  // se início ou destino são paredes, não tem caminho
  if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return "Não";

  // movimento 4-direções: cima, baixo, esquerda, direita
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  // visited boolean matrix
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  // fila para BFS, armazenando [r, c]
  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    // se chegou ao destino
    if (r === n - 1 && c === n - 1) return "Sim";

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      // checar limites, não visitado e não ser parede
      if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc] && grid[nr][nc] === 0) {
        visited[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }
  }

  // fila vazia, sem caminho
  return "Não";
}

/* --- Exemplo de uso com a matriz do enunciado --- */
const labirinto = [
  [0, 1, 0, 0],
  [0, 0, 0, 1],
  [1, 1, 0, 0],
  [0, 0, 0, 0]
];

console.log(existeCaminho(labirinto)); // deve imprimir "Sim" ou "Não"