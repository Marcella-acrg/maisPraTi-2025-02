const prompt = require('prompt-sync')();

let fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`Os 10 primeiros elementos da sequência de Fibonacci são: ${fibonacci.join(", ")}`);