function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args); // transforma os argumentos em uma string única
    if (cache.has(key)) {
      // Se já tiver no cache, retorna imediatamente
      return cache.get(key);
    }

    const result = fn(...args); // calcula o resultado
    cache.set(key, result);     // armazena no cache
    return result;
  };
}

function soma(a, b) {
  console.log('Executando soma...');
  return a + b;
}

const somaMemoizada = memoize(soma);

console.log(somaMemoizada(2, 3)); // Executa a função
console.log(somaMemoizada(2, 3)); // Retorna do cache (mais rápido)