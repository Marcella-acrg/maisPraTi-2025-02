# 🚀 Formação Desenvolvedor Full Stack Júnior Codifica e +PraTi 🚀 
## Desafios de Programação em Java 

Este repositório contém a implementação de 8 exercícios em Java, relacionados ao módulo IV da formação desenvolvedor Full Stack que aborda conceitos fundamentais de **POO** (Programação Orientada a Objetos), **Generics**, **Imutabilidade**, **Design Patterns** e **Validação de Regras de Negócio**.

---

## Exercício 1 — Encapsulamento (Classe Produto)

**Objetivo:**  
Implementar a classe `Produto` com atributos privados, validando dados de entrada.

**Detalhes:**
- Atributos: `nome` (String), `preco` (double), `quantidadeEmEstoque` (int).
- Regras:
    - `nome` não pode ser nulo ou vazio.
    - `preco` e `quantidadeEmEstoque` não podem ser negativos.
- Lançar `IllegalArgumentException` em caso de valores inválidos.

**Demonstração:**
- Criar instâncias de `Produto`.
- Alterar valores válidos via setters.
- Testar entradas inválidas e capturar exceções.

---

## Exercício 2 — Encapsulamento com Validação de Regra (Desconto)

**Objetivo:**  
Estender a classe `Produto` com o método `aplicarDesconto`.

**Detalhes:**
- Desconto permitido: 0% a 50%.
- Lançar `IllegalArgumentException` ou `DescontoInvalidoException` em caso de violação.
- Mostrar preço antes e depois do desconto.

**Demonstração:**
- Aplicação de descontos válidos.
- Teste de descontos inválidos com tratamento de exceção.

---

## Exercício 3 — Herança (Hierarquia de Funcionários)

**Objetivo:**  
Criar hierarquia de funcionários com cálculo de bônus.

**Detalhes:**
- Classe base `Funcionario` com `nome` e `salario`.
- Subclasses:
    - `Gerente`: bônus = 20% do salário.
    - `Desenvolvedor`: bônus = 10% do salário.
- Garantir salários positivos.

**Demonstração:**
- Criar lista de `Funcionario`.
- Exibir bônus calculado para cada tipo de funcionário.

---

## Exercício 4 — Polimorfismo com Interface (IMeioTransporte)

**Objetivo:**  
Demonstrar polimorfismo usando interface.

**Detalhes:**
- Interface `IMeioTransporte` com métodos `acelerar()` e `frear()`.
- Implementações:
    - `Carro`
    - `Bicicleta`
    - `Trem`
- Cada implementação com lógica própria de velocidade e limites.
- Tratar operações inválidas com exceções.

**Demonstração:**
- Criar lista de `IMeioTransporte`.
- Chamar `acelerar()` e `frear()` de forma polimórfica.

---

## Exercício 5 — Abstração (Sistema de Pagamentos)

**Objetivo:**  
Implementar abstração para diferentes formas de pagamento.

**Detalhes:**
- Classe abstrata `FormaPagamento`:
    - `validarPagamento()`
    - `processarPagamento(BigDecimal valor)`
- Subclasses:
    - `CartaoCredito`
    - `Boleto`
    - `Pix`
- Validações específicas (ex.: número do cartão, chave Pix).
- Lançar `PagamentoInvalidoException` em caso de erro.

**Demonstração:**
- Uso polimórfico das formas de pagamento.
- Tratamento de exceções.

---

## Exercício 6 — Imutabilidade e Objetos de Valor (Carrinho de Compras)

**Objetivo:**  
Modelar objetos imutáveis e operações funcionais.

**Detalhes:**
- Objeto de valor imutável `Dinheiro` (valor e moeda).
- `Produto`, `ItemCarrinho`, `Carrinho` com lista imutável de itens.
- Operações de adicionar/remover/aplicar cupom retornam novo carrinho.
- Validações:
    - Quantidade > 0
    - Valores não negativos
    - Cupom limitado a 30% com arredondamento bancário

**Demonstração:**
- Fluxo completo do carrinho em testes.

---

## Exercício 7 — Generics (Repositório Genérico em Memória)

**Objetivo:**  
Criar repositório genérico utilizando Generics.

**Detalhes:**
- Interface `Identificavel` com `getId()`.
- Interface `IRepository<T extends Identificavel, ID>`:
    - `salvar(T entidade)`
    - `buscarPorId(ID id): Optional<T>`
    - `listarTodos(): List<T>`
    - `remover(ID id)`
- Implementação `InMemoryRepository` usando `Map<ID, T>`.
- Garantir cópia imutável ao listar e lançar `EntidadeNaoEncontradaException` ao remover ID inexistente.

**Demonstração:**
- Uso do repositório com `Produto` e `Funcionario`.

---

## Exercício 8 — Padrão Strategy (Cálculo de Frete com Lambdas)

**Objetivo:**  
Aplicar padrão Strategy para cálculo de frete.

**Detalhes:**
- Interface `CalculadoraFrete` com `calcular(Pedido): BigDecimal`.
- Estratégias:
    - `Sedex`
    - `PAC`
    - `RetiradaNaLoja`
- Injeção e troca de estratégia em tempo de execução.
- Estratégia promocional via lambda (ex.: frete grátis acima de determinado valor).
- Validação de CEP/região e exceções para CEP inválido.

**Demonstração:**
- Troca de estratégia em tempo de execução e cálculo do frete.

---

## Tecnologias

- Java 17+
- Conceitos aplicados: OOP, Polimorfismo, Abstração, Imutabilidade, Generics, Strategy Pattern, Exceções personalizadas.

---


