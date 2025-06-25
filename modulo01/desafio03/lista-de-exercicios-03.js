// ******* Validação de Datas *******
// function ehDataValida(dia, mes, ano) {
//     if (mes < 1 || mes > 12) {
//         return false
//     }

//     let bissexto = false
//     if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//         return true
//     }

//     let totalDeDiasPorMes = [31, (bissexto ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//     if(dia < 1 || dia > totalDeDiasPorMes[mes-1]) {
//         return false
//     }

//     return true
// }

// console.log(ehDataValida(29, 2, 2020))
// console.log(ehDataValida(29, 2, 2021))
// console.log(ehDataValida(31, 6, 2025))
// console.log(ehDataValida(17, 7, 2025))



// ******* Jogo da Adivinhação *******
// const prompt = require('prompt-sync')()

// const numeroSecreto = Math.floor(Math.random() * 100) + 1
// let tentativas = 0
// let palpite = null

// console.log("=== JOGO DE ADIVINHAÇÃO ===")

// while (palpite !== numeroSecreto) {
//     palpite = Number(prompt("Adivinhe o número (1 a 100): "))
//     tentativas++

//     if (isNaN(palpite)) {
//         console.log("❌ Isso não é um número válido.\n")
//     } else if ((palpite < 1) || (palpite > 100)) {
//         console.log("🟡  Atenção! O número digitado está fora do intervalo de 1 a 100")
//     } else if (palpite < numeroSecreto) {
//         console.log("🔼  Mais alto!\n")
//     } else if (palpite > numeroSecreto) {
//         console.log("🔽  Mais baixo!\n")
//     } else {
//         console.log(`🎉  Parabéns! 🎯 Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`)
//     }
// }



// ******* Palavras Únicas *******
// const prompt = require('prompt-sync')()

// let frase = prompt("Digite uma frase com palavras repetidas e únicas: ")

// frase = frase.toLowerCase()

// frase = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

// frase = frase.replace(/[.,!?]/g, "")

// let palavras = frase.split(" ")

// let unicas = [];

// for (let i = 0; i < palavras.length; i++) {
//     let palavraAtual = palavras[i]
//     let contador = 0

//     for (let j = 0; j < palavras.length; j++) {
//         if (palavraAtual === palavras[j]) {
//             contador++
//         }
//     }

//     if (contador === 1) {
//         unicas.push(palavraAtual)
//     }
// }

// console.log("Palavras únicas:")
// console.log(unicas)



// ******* Fatorial Recursivo *******
// const prompt = require("prompt-sync")()

// function fatorial(n) {
//   if (n < 0) {
//     throw new Error("Não é possível calcular o fatorial de números negativos")
//   }

//   if (n === 0) {
//     return 1
//   }

//   return n * fatorial(n - 1)
// }

// let numero
// while (true) {
//   numero = Number(prompt("Digite um número para calcular o fatorial: "))

//   if (isNaN(numero) || numero < 0) {
//     console.log("Por favor, digite um número válido.")
//   } else {
//     break
//   }
// }

// try {
//   const resultado = fatorial(numero)
//   console.log(`Fatorial de ${numero} é ${resultado}`)
// } catch (erro) {
//   console.log("Erro:", erro.message)
// }



// ******* Debounce *******
// function debounce(fn, delay) {
//   let timeoutId

//   return function(...args) {
//     clearTimeout(timeoutId) 
//     timeoutId = setTimeout(() => {
//       fn.apply(this, args)
//     }, delay)
//   }
// }

// function mostrarMensagem(msg) {
//   console.log('Executou:', msg)
// }

// const debounced = debounce(mostrarMensagem, 1000)

// debounced('Olá!')
// debounced('Alguém ai?')
// debounced('Última tentativa hein...')
// debounced('Oiiiiiiiiiiii')



// ******* Memoization *******
// function memoize(fn) {
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// }

// let fib = function(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2); 
// };

// fib = memoize(fib);

// console.log(fib(8)); 
// console.log(fib(40)); 



// ******* Mapeamento e Ordenação *******
// function nomesOrdenadosPorPreco(produtos) {
//   return produtos
//     .slice() 
//     .sort((a, b) => a.preco - b.preco) 
//     .map(produto => produto.nome)
// }

// const produtos = [
//   { nome: 'Televisão', preco: 1600 },
//   { nome: 'Microondas', preco: 600 },
//   { nome: 'Celular', preco: 1200 },
//   { nome: 'Notebook', preco: 3000 },
//   { nome: 'Fone de ouvido', preco: 150 },
//   { nome: 'Monitor', preco: 900 }
// ]

// const nomesOrdenados = nomesOrdenadosPorPreco(produtos)
// console.log(nomesOrdenados)



// ******* Agrupamento por Propriedade *******
// function agruparVendasPorCliente(vendas) {
//   return vendas.reduce((acumulador, venda) => {
//     const { cliente, total } = venda

//     if (!acumulador[cliente]) {
//       acumulador[cliente] = 0
//     }

//     acumulador[cliente] += total
//     return acumulador
//   }, {})
// }

// const vendas = [
//   { cliente: 'Marcella', total: 200 },
//   { cliente: 'Igor', total: 500 },
//   { cliente: 'Ana', total: 100 },
//   { cliente: 'João', total: 200 },
//   { cliente: 'Ana', total: 50 },
//   { cliente: 'Marcella', total: 1000 },
//   { cliente: 'Maria', total: 300 }
// ]

// const resultado = agruparVendasPorCliente(vendas)
// console.log(resultado)



// ******* Conversão entre Formatos
// function paresParaObjeto(pares) {
//   return Object.fromEntries(pares)
// }
// const pares = [['nome', 'Gilma'], ['idade', 63]]
// console.log(paresParaObjeto(pares)) 


// function objetoParaPares(obj) {
//   return Object.entries(obj)
// }
// const obj = { nome: 'Lorena', idade: 03 }
// console.log(objetoParaPares(obj)) 