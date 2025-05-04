// const prompt = require('prompt-sync')()

// let numero = Number(prompt('Insira um número e descubra se é PAR OU ÍMPAR: '))

// while (isNaN(numero)) {
//     console.log('Número inválido! Tente novamente.')
//     numero = Number(prompt('Insira um número e descubra se é PAR OU ÍMPAR: '))
// }

// if(numero % 2 === 0) {
//     console.log('Número PAR!')
// } else {
//     console.log('Número ÍMPAR!')
// }



// const prompt = require('prompt-sync')()

// let idade = Number(prompt('Insira a idade e descubra se é CRIANÇA, ADULTO OU IDOSO: '))

// while (isNaN(idade) || idade < 0) {
//     console.log('Idade inválida! Tente novamente.');
//     idade = Number(prompt('Insira a idade novamente: '));
// }

// if (idade < 18) {
//     console.log('CRIANÇA');
// } else if (idade < 65) {
//     console.log('ADULTO');
// } else {
//     console.log('IDOSO');
// }



// const prompt = require('prompt-sync')()

// let nota = Number(prompt('Insira uma nota de 0 a 10 e descubra a classificação: APROVADO, RECUPERAÇÃO OU REPROVADO:  '))

// while (isNaN(nota) || nota < 0 || nota > 10) {
//     console.log('Nota inválida! Tente novamente.')
//     nota = Number(prompt('Insira uma nota entre 0 e 10: '))
// }

// if(nota <= 5) {
//     console.log('REPROVADO')
// } else if(nota >= 7) {
//     console.log('APROVADO')
// } else {
//     console.log('RECUPERAÇÃO')
// }



// const prompt = require('prompt-sync')()

// let opcao = ''
// let celcius, fahrenheit

// while(opcao !== '3') {
//     console.log('======================= MENU =======================')
//     console.log('1. Tranformar Celcius em Fahrenheit ')
//     console.log('2. Tranformar Fahrenheit em Celcius ')
//     console.log('3. Sair')

//     opcao = prompt('Insira uma das opções: ')

//     switch(opcao) {
//         case '1': 
//             celcius = Number(prompt('Insira a temperatura em Celcius: '))
//             fahrenheit = (1.8 * celcius) + 32
//             console.log(`${celcius}ºC é igual a ${fahrenheit}ºF`)
//             break

//         case '2': 
//             fahrenheit  = Number(prompt('Insira a temperatura em Fahrenheit: '))
//             celcius = (fahrenheit - 32) / 1.8
//             console.log(`${fahrenheit}ºF é igual a ${celcius}ºC`)
//             break

//         case '3': 
//             console.log('Saindo do programa...')
//             break

//         default:
//             console.log('Opção inválida. Tente novamente.')

//     }
// } 



// const prompt = require('prompt-sync')()

// let imc = Number(prompt('Insira seu peso e descubra a categoria de peso (BAIXO, NORMAL, SOBREPESO OU OBESIDADE): '))

// while(isNaN(imc) || imc < 0 || imc < 16) {
//     console.log('IMC inválido! Tente novamente.')
//     imc = Number(prompt('Insira seu peso: '))
// }

// if((imc >= 16) && (imc <= 18.5)) {
//     console.log('IMC Baixo')
// } else if((imc > 18.5) && (imc <= 24.9)) {
//     console.log('IMC Normal')
// } else if((imc > 24.9) && (imc <= 29.9)) {
//     console.log('IMC Sobrepeso')
// } else {
//     console.log('IMC Obesidade')
// }



// const prompt = require('prompt-sync')()

// let A = Number(prompt('Insira o valor do lado A: '))
// let B = Number(prompt('Insira o valor do lado B: '))
// let C = Number(prompt('Insira o valor do lado C: '))

// if((A < B + C) && (B < A +C) && (C < A +B)) {
//     if((A === B) && (B === C)){
//         console.log('Os lados fornecidos formam um triângulo equilátero, ou seja, possui todos os lados iguais')  
//     } else if((A === B) || (A === C) || (B === C)){
//         console.log('Os lados fornecidos formam um triângulo isóceles, ou seja, possui dois lados iguais')
//     } else {
//         console.log('Os lados fornecidos formam um triângulo escaleno, ou seja, possui todos os lados diferntes')
//     } 
// } else {
//     console.log('Os lados fornecidos NÃO formam um triângulo')
// }



// const prompt = require('prompt-sync')()

// let quantidadeMaca = Number(prompt('Insira o número de maçãs que deseja adquitir: '))

// let totalCompra

// while(isNaN(quantidadeMaca) || quantidadeMaca < 0) {
//     console.log('Quantidade de maçã inválida! Tente novamente.')
//     quantidadeMaca = Number(prompt('Insira o número de maçãs que deseja adquitir: '))

// }

// if(quantidadeMaca < 12) {
//     totalCompra = quantidadeMaca * 0.30
//     console.log(`O valor total da compra foi ${totalCompra}`)
// } else {
//     totalCompra = quantidadeMaca * 0.25
//     console.log(`O valor total da compra foi ${totalCompra}`)
// } 



// const prompt = require('prompt-sync')()

// let primeiroValor = Number(prompt('Insira um número qualquer: '))
// let segundoValor = Number(prompt('Insira um outro número qualquer: '))

// while(isNaN(primeiroValor) || isNaN(segundoValor) || (primeiroValor === segundoValor)) {
//     console.log('Valores iguais! Tente novamente')
//     primeiroValor = Number(prompt('Insira um número qualquer: '))
//     segundoValor = Number(prompt('Insira um outro número qualquer: '))
// }

// if(primeiroValor !== segundoValor) {
//     if(primeiroValor > segundoValor) {
//         console.log(segundoValor, primeiroValor)
//     } else {
//         console.log(primeiroValor, segundoValor)
//     }  
// } 



// for(let contagemRegressiva = 10; contagemRegressiva >= 1 ; contagemRegressiva--) {
//     console.log(contagemRegressiva)
// }



// const prompt = require('prompt-sync')()

// let numInteiro = Number(prompt('Insira um número inteiro: '))

// for(let i = 1; i <= 10; i++) {
//     console.log(numInteiro)
// }



// const prompt = require('prompt-sync')()

// let soma = 0
// let num

// for(let i = 1; i <= 5; i++) {
//     num = Number(prompt(`Insira o ${i}º número: `))
//     soma += num 

// }
// console.log(`A soma total é igual a: ${soma}`)



// const prompt = require('prompt-sync')()

// let tabuada = Number(prompt('Insira o número da tabuada que deseja (1 até 10): '))

// for(let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${tabuada} = ${i * tabuada}`)
// }



// const prompt = require('prompt-sync')()

// let numeros
// let soma = 0
// let quantidade = 0

// do{
//     numeros = Number(prompt('Insiera numeros decimais e encontre a média destes números (Digite 0 pra sair): '))
    
//     if(numeros !== 0) {
//         soma += numeros
//         quantidade++
//     }

// } while(numeros !== 0)

// if(quantidade > 0) {
//     const media = soma / quantidade
//     console.log(`A média foi de: ${media}`)
// } else {
//     console. log('Nenhum número válido foi inserido')
// }



// const prompt = require('prompt-sync')()

// let fatorarNum = Number(prompt('Insira um número e descubra o seu fatorial: '))

// while(isNaN(fatorarNum) || fatorarNum < 0){ 
//     console.log('Número inválido! Tente novamente.')
//     fatorarNum = Number(prompt('Insira um número e descubra o seu fatorial: '))    
// }

// let fatorial = 1

// for(let i = 1; i <= fatorarNum; i++) {

//     fatorial = fatorial * i
// }

// console.log(`O fatorial de ${fatorarNum} é: ${fatorial}`)



// let a = 0;
// let b = 1;
// let c;

// for (let i = 0; i < 10; i++) {
//     console.log(`Os 10 primeiros números da sequência de Fibonacci são: ${a}`);
//     c = a + b;
//     a = b;
//     b = c;
// }



