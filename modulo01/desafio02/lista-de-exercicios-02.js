// const prompt = require('prompt-sync')()

// let qtdCigarrosPorDia = Number(prompt('Quantos cigarros você fuma por dia? '))
// let quantosAnosComoFumante = Number(prompt('Há quantos anos você fuma? '))

// let tempoDeVidaReduzido = (qtdCigarrosPorDia * 10/60)/24
// let diasDeVidaReduzido = quantosAnosComoFumante * 365 * tempoDeVidaReduzido

// console.log(`Ao fumar ${qtdCigarrosPorDia} cigarros por dia, você reduz o seu tempo de vida total em ${diasDeVidaReduzido.toFixed(0)} dias`)



// const prompt = require('prompt-sync')()

// let velocidadeDoCarro = Number(prompt('Qual a velocidade do carro em KM? '))

// let multa = (velocidadeDoCarro - 80) * 5


// if(velocidadeDoCarro > 80) {
//     console.log(`Você foi multado em R$${multa.toFixed(2)} por velocidade acima do limte `)
// }



// const prompt = require('prompt-sync')()

// let distancia = Number(prompt('Qual a distância que deseja percorrer em KM? '))
// let valorPassagem;

// if(distancia >= 200) {
//     valorPassagem = (distancia - 200) * 0.50
// } else {
//     valorPassagem = (200 - distancia) * 0.45
// }

// if(valorPassagem !== undefined){
//     console.log(`O valor da passagem é: R$ ${valorPassagem.toFixed(2)}`)

// }



// const prompt = require('prompt-sync')()

// const a = Number(prompt(`Insira o comprimento do 1º segmento da reta: `))
// const b = Number(prompt(`Insira o comprimento do 2º segmento da reta: `))
// const c = Number(prompt(`Insira o comprimento do 3º segmento da reta: `))

// if (a < b + c && b < a + c && c < a + b) {
//     console.log('Os seguimentos podem foram um triângulo')
// } else {
//     console.log('Os seguimentos NÃO pode formar um triângulo')
// }



// const prompt = require('prompt-sync')()

// const opçoes = ['PEDRA', 'PAPEL', 'TESOURA']

// while(true) {
//     let usuario = prompt('Digite o que deseja jogar - Pedra, Papel, Tesoura (ou "sair" para encerrar): ').toUpperCase()

//     if(usuario === 'SAIR') {
//         console.log('Jogo encerrado. Até a próxima!')
//         break
//     }


//     while(!opçoes.includes(usuario)) {
//         console.log('Opção inválida! Tente novamente.')
//         usuario =  prompt('Digite Pedra, Papel, Tesoura (ou "sair" para encerrar): ').toUpperCase()
//     }

//     const computador = opçoes[Math.floor(Math.random() * 3)]


//     console.log(`VOCÊ JOGOU: ${usuario}`)
//     console.log(`COMPUTADOR JOGOU: ${computador}`)

//     if(usuario === computador) {
//         console.log('Empate!')
//     } else if ((usuario === 'PEDRA' && computador === 'TESOURA') || (usuario === 'PAPEL' && computador === 'PEDRA') || (usuario === 'TESOURA' && computador === 'PAPEL')) {
//         console.log('Você ganhou!')
//     } else {
//         console.log('Você perdeu!')
//     }
// }



// const prompt = require('prompt-sync')()

// const numeros = [1, 2, 3, 4, 5]

// while(true) {
//     let entrada = prompt('Insira entre 1 e 5 o número você acha que foi sorteado (ou "sair" para encerrar): ').toLowerCase()

//     if(entrada === 'sair') {
//         console.log('Jogo encerrado. Até a próxima!')
//         break
//     }

//     let palpiteJogador = Number(entrada)

//     while(isNaN(palpiteJogador) || !numeros.includes(palpiteJogador)) {
//         console.log('Opção inválida! Tente novamente.')
//         entrada = prompt('Insira entre 1 e 5 o número você acha que foi sorteado (ou "sair" para encerrar): ').toLowerCase()

//         if(entrada === 'sair') {
//             console.log('Jogo encerrado. Até a próxima!')
//             return
//         }

//         palpiteJogador = Number(entrada)

//     }

//     const sorteioComputador = numeros[Math.floor(Math.random() * 5)]

//     console.log(`VOCÊ JOGOU: ${palpiteJogador}`)
//     console.log(`O COMPUTADOR JOGOU: ${sorteioComputador}`)

//     if(palpiteJogador === sorteioComputador) {
//         console.log('Parabéns, você acertou!')
//     } else {
//         console.log('Errou!')
//     }
// }



// const prompt = require('prompt-sync')()

// let tipoDoCarro = prompt('Digite o tipo do carro que deseja alugar - Popular ou Luxo: ').toUpperCase()
// let qtdDiasAlugado = Number(prompt('Digite quantos dias deseja alugar o carro: '))
// let kmPercorridos = Number(prompt('Digite quantos KM percorreu com o carro: '))
// let valorDePagamento
// const valorAteCemKm = 0.20
// const valorAcimaDeCemKm = 0.10
// const valorAte200Km = 0.30
// const valorAcimaDeDuzentosKm = 0.25
// const diariaCaroPopular = 90
// const diariaCarroLuxo = 150

// if (qtdDiasAlugado <= 0 || kmPercorridos <= 0) {
//     console.log('Erro: Dias ou quilômetros não podem ser zero ou número negativo.')
// } else if (tipoDoCarro === 'POPULAR' && kmPercorridos <= 100) {
//     valorDePagamento = (kmPercorridos * valorAteCemKm) + (qtdDiasAlugado * diariaCaroPopular)
// } else if (tipoDoCarro === 'POPULAR' && kmPercorridos > 100) {
//     valorDePagamento = (kmPercorridos * valorAcimaDeCemKm) + (qtdDiasAlugado * diariaCaroPopular)
// } else if (tipoDoCarro === 'LUXO' && kmPercorridos <= 200) {
//     valorDePagamento = (kmPercorridos * valorAte200Km) + (qtdDiasAlugado * diariaCarroLuxo)
// } else if (tipoDoCarro === 'LUXO' && kmPercorridos > 200) {
//     valorDePagamento = (kmPercorridos * valorAcimaDeDuzentosKm) + (qtdDiasAlugado * diariaCarroLuxo)
// } else {
//     console.log("Erro: Tipo de carro inválido. Use 'Popular' ou 'Luxo'.");
// }

// if(valorDePagamento !== undefined) {
//     console.log(`Valor a pagar é R$: ${valorDePagamento.toFixed(2)}`)
// }



// const prompt = require('prompt-sync')()

// let horasDeAtividade = Number(prompt('Digite quantas horas de atividade física você realizou no mês: '))
// let pontuacao

// if(isNaN(horasDeAtividade) || horasDeAtividade <= 0) {
//     console.log('Erro: Horas de atividade não podem ser 0 ou número negativo!')
// } else if(horasDeAtividade <= 10) {
//     pontuacao = horasDeAtividade * 2
// } else if(horasDeAtividade > 10 && horasDeAtividade <= 20) {
//     pontuacao = (10 * 2) + ((horasDeAtividade - 10) * 5)
// } else {
//     pontuacao = (10 * 2) + (10 * 5) + ((horasDeAtividade - 20) * 10);
// }

// const fatura = pontuacao * 0.05
// console.log(`O valor a receber será de: R$ ${fatura}`)



// const prompt = require('prompt-sync')()

// let pergunta
// let somaSalariosMasculino = 0
// let somaSalariosFeminino = 0
// let contMasculino = 0
// let contFeminino = 0

// do {
//     let sexoDoFuncionario = prompt('Informe o seu sexo (Masculino ou Feminino): ').toUpperCase()
//     let salario = Number(prompt('Informe o valor do seu salário: '))

//     pergunta = prompt('Deseja continuar, digite S para Sim ou N para não ? ').toUpperCase()

//     if(sexoDoFuncionario === 'MASCULINO' && salario > 0) {
//         contMasculino += 1
//         somaSalariosMasculino += salario
//     } else if (sexoDoFuncionario === 'FEMININO' && salario > 0) {
//         contFeminino += 1
//         somaSalariosFeminino += salario
//     } else {
//         console.log('Sexo inválido! Tente novamente')
//     }
    
// } while( pergunta === 'S')

//     console.log('--------------------------------------------------------------------------------------------------------------------')
//     console.log(`O valor total da soma dos salários dos funcionários do sexo masculino é: R$ ${somaSalariosMasculino.toFixed(2)}`)
//     console.log(`O valor total da soma dos salários dos funcionários do sexo feminino é: R$ ${somaSalariosFeminino.toFixed(2)}`)
//     console.log(`A quantidade de funcionários do sexo masculino é: ${contMasculino}`)
//     console.log(`A quantidade de funcionários do sexo feminino é: ${contFeminino}`)



// const prompt = require('prompt-sync')()

// let numeros = []
// let pergunta
// let somaTotalDosNumeros = 0
// let contagemDePares = 0
// let menor = null

// do{
//     let numero = Number(prompt('Insira um número: '))
//     numeros.push(numero)

//     somaTotalDosNumeros += numero

//     if(numero % 2 === 0) {
//         contagemDePares++
//     }

//     if(menor === null || numero < menor) {
//         menor = numero
//     }

//     pergunta = prompt('Você deseja continuar? Digite S para Sim ou N para Não:  ').toUpperCase()
    
// } while( pergunta === 'S')

// let media = somaTotalDosNumeros / numeros.length  

// console.log(`\nOs números inseridos foram: ${numeros.join(' - ')}`)
// console.log(`\nSomatório: ${somaTotalDosNumeros}`)
// console.log(`Menor valor: ${menor}`)
// console.log(`Média: ${media.toFixed(2)}`)
// console.log(`Quantidade de valores pares: ${contagemDePares}`)



// const prompt = require('prompt-sync')()

// let primeiroTermo = Number(prompt('Insira o primeiro termo da PA: '))
// let razao = Number(prompt('Insira a razão da PA: '))
// let soma = 0
// let elementos = []

// for(let i = 0; i < 10; i++) {
// let termoAtual = primeiroTermo + i * razao
// elementos.push(termoAtual)
// soma += termoAtual

// }

// console.log("Os 10 primeiros elementos da PA são:", elementos.join(", "))
// console.log("A soma dos 10 elementos é:", soma)



// const prompt = require('prompt-sync')();

// let fibonacci = [1, 1];

// for (let i = 2; i < 10; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// console.log(`Os 10 primeiros elementos da sequência de Fibonacci são: ${fibonacci.join(", ")}`);

