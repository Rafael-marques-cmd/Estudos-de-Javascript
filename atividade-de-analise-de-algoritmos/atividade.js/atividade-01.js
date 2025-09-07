 /* 
 function subirEscada(n) {
  if (n <= 2) return n; 

  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}


console.log(subirEscada(5)); 
*/


/*
function caminhosGrade(m, n) {
  let dp = Array.from({ length: m }, () => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}


console.log(caminhosGrade(8, 8)); 
*/


function somaSubconjunto(nums, alvo) {
  let n = nums.length;
  let dp = Array.from({length : n + 1 }, () => Array(alvo + 1).fill(false));

  for (let i = 0; i <= n; i++) dp[i][0] = true;

  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= alvo; s++) {
      if (nums[i - 1] <= s) {
        dp[i][s] = dp[i - 1][s] || dp[i - 1][s - nums[i - 1]];
      } else {
        dp[i][s] = dp[i - 1][s];
      }
    }
  }

  return dp[n][alvo];
}

console.log(somaSubconjunto([3, 34, 4, 12, 5, 2], 9)); 
console.log(somaSubconjunto([3, 34, 4, 12, 5, 2], 30));