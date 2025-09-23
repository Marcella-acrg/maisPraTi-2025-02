import exercicio01e02.DescontoInvalidoException;
import exercicio03.Desenvolvedor;
import exercicio03.Gerente;
import exercicio04.Bicicleta;
import exercicio04.Carro;
import exercicio04.IMeioTransporte;
import exercicio04.Trem;
import exercicio05.*;
import exercicio06.Carrinho;
import exercicio06.Dinheiro;
import exercicio06.Moeda;
import exercicio06.ProdutosDisponiveis;
import exercicio07.*;
import exercicio08.*;

import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        System.out.println("========================== Exercício 1 ==========================");
        try {
            exercicio01e02.Produto produto = new exercicio01e02.Produto("Creme de rosto", 1200.00, 3);
            produto.exibirInformacoes();
        } catch (IllegalArgumentException ex) {
            ex.printStackTrace();
        }

        System.out.println("-----------------------------------------------------------------");

        try{
            exercicio01e02.Produto produtoNomeInvalido = new exercicio01e02.Produto("", 600.00, 20);
            produtoNomeInvalido.exibirInformacoes();
        } catch (IllegalArgumentException ex) {
            System.out.println(ex.getMessage());
        }

        System.out.println("-----------------------------------------------------------------");

        try{
            exercicio01e02.Produto produtoPrecoInvalido = new exercicio01e02.Produto("Perfume", -600.00, 10);
            produtoPrecoInvalido.exibirInformacoes();
        } catch (IllegalArgumentException ex) {
            System.out.println(ex.getMessage());
        }

        System.out.println("-----------------------------------------------------------------");

        try{
            exercicio01e02.Produto produtoQuantidadeEmEstoqueInvalido = new exercicio01e02.Produto("Desodorante", 40.00, -8);
            produtoQuantidadeEmEstoqueInvalido.exibirInformacoes();
        } catch (IllegalArgumentException ex) {
            System.out.println(ex.getMessage());
        }

        System.out.println("-----------------------------------------------------------------");
        System.out.println("");
        System.out.println("========================== Exercício 2 ==========================");

        try {
            exercicio01e02.Produto produto2 = new exercicio01e02.Produto("Skate", 12.99, 23);
            System.out.println("Valor do produto: ");
            produto2.exibirInformacoes();
            produto2.aplicarDesconto(50);
            produto2.retirarDoEstoque(1);
            System.out.println("Valor e quantidade do produto após aplicação de desconto: ");
            produto2.exibirInformacoes();
        } catch (DescontoInvalidoException e) {
            System.out.println(e.getMessage());
        }

        System.out.println("-----------------------------------------------------------------");

        try {
            exercicio01e02.Produto produto2 = new exercicio01e02.Produto("Skate", 12.99, 23);
            System.out.println("Valor do produto: ");
            produto2.exibirInformacoes();
            produto2.aplicarDesconto(90);
            produto2.retirarDoEstoque(1);
            System.out.println("Valor e quantidade do produto após aplicação de desconto: ");
            produto2.exibirInformacoes();
        } catch (DescontoInvalidoException e) {
            System.out.println(e.getMessage());
        }

        System.out.println("-----------------------------------------------------------------");
        System.out.println("");
        System.out.println("========================== Exercício 3 ==========================");

        exercicio03.Funcionario gerente = new Gerente("Jaques", new BigDecimal(10000));
        exercicio03.Funcionario desenvolvedor = new Desenvolvedor("Marcella", new BigDecimal(6000));

        List<exercicio03.Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(gerente);
        funcionarios.add(desenvolvedor);

        for(exercicio03.Funcionario funcionario : funcionarios) {
            System.out.println("Funcionário(a): " + funcionario.getNome());
            System.out.println("Salário: " + funcionario.getSalario());
            System.out.println("Bônus: " + funcionario.calcularBonus());
        }

        System.out.println("-----------------------------------------------------------------");
        System.out.println("");
        System.out.println("========================== Exercício 4 ==========================");

        List<IMeioTransporte> meiosDeTransporteCarro = new ArrayList<>();

        meiosDeTransporteCarro.add(new Carro());

        for(IMeioTransporte meioTransporteCarro : meiosDeTransporteCarro) {
            try {
                while (true) {
                    meioTransporteCarro.acelerar();
                }
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }

        System.out.println("-----------------------------------------------------------------");

        List<IMeioTransporte> meiosDeTransporteTrem = new ArrayList<>();


        meiosDeTransporteTrem.add(new Trem());

        for(IMeioTransporte meioTransporteTrem : meiosDeTransporteTrem) {
            try {
                while (true) {
                    meioTransporteTrem.acelerar();
                }
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }

        System.out.println("-----------------------------------------------------------------");

        List<IMeioTransporte> meiosDeTransporteBicicleta = new ArrayList<>();


        meiosDeTransporteBicicleta.add(new Bicicleta());

        for(IMeioTransporte meioTransporteBicicleta : meiosDeTransporteBicicleta) {
            try {
                while (true) {
                    meioTransporteBicicleta.acelerar();
                }
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }

        System.out.println("-----------------------------------------------------------------");
        System.out.println("");
        System.out.println("========================== Exercício 5 ==========================");

        List<FormaDePagamento> pagamentos = new ArrayList<>();

        pagamentos.add(new CartaoDeCredito("1234567890123456"));
        pagamentos.add(new CartaoDeCredito("123"));
        pagamentos.add(new Boleto("12345678901234567890123456789012345678901234567"));
        pagamentos.add(new Boleto("123"));
        pagamentos.add(new Pix("teste@email.com"));
        pagamentos.add(new Pix("teste#email.com"));

        for (FormaDePagamento pagamento : pagamentos) {
            try {
                pagamento.processarPagamento(new BigDecimal("100.00"));
            } catch (PagamentoInvalidoException e) {
                System.out.println("Erro ao processar pagamento (" + pagamento.getClass().getSimpleName() + "): " + e.getMessage());
            }
            System.out.println("-----------------------------------------------------------------");
        }

        System.out.println("");
        System.out.println("========================== Exercício 6 ==========================");

        ProdutosDisponiveis p1 = new ProdutosDisponiveis("Caneta", new Dinheiro(new BigDecimal("2.50"), Moeda.BRL));
        ProdutosDisponiveis p2 = new ProdutosDisponiveis("Caderno", new Dinheiro(new BigDecimal("15.00"), Moeda.BRL));
        ProdutosDisponiveis p3 = new ProdutosDisponiveis("Estojo", new Dinheiro(new BigDecimal("5.00"), Moeda.BRL));

        Carrinho carrinho = new Carrinho(Collections.emptyList());

        carrinho = carrinho.adicionarItem(p1, 3);
        carrinho = carrinho.adicionarItem(p2, 2);

        System.out.println("Carrinho original:");
        carrinho.getItens().forEach(i ->
                System.out.println(i.getQuantidade() + "x " + i.getProduto().getNome() + " = " + i.getTotal())
        );
        System.out.println("Total: " + carrinho.getTotal());

        System.out.println("-----------------------------------------------------------------");

        Carrinho comDesconto = carrinho.aplicarCupom(new BigDecimal("0.20"));
        System.out.println("Carrinho com desconto 20%:");
        comDesconto.getItens().forEach(i ->
                System.out.println(i.getQuantidade() + "x " + i.getProduto().getNome() + " = " + i.getTotal())
        );
        System.out.println("Total: " + comDesconto.getTotal());

        System.out.println("-----------------------------------------------------------------");

        Carrinho removido = comDesconto.removerItem("Caneta");
        System.out.println("Carrinho após remover Caneta:");
        removido.getItens().forEach(i ->
                System.out.println(i.getQuantidade() + "x " + i.getProduto().getNome() + " = " + i.getTotal())
        );
        System.out.println("Total: " + removido.getTotal());

        System.out.println("-----------------------------------------------------------------");

        try {
            carrinho = carrinho.adicionarItem(p3, -5);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao adicionar item: " + e.getMessage());
        }


        System.out.println("-----------------------------------------------------------------");
        System.out.println("");
        System.out.println("========================== Exercício 7 ==========================");

        IRepository<Produto, Integer> produtoRepository = new InMemoryRepository<>();
        IRepository<Funcionario, String> funcionarioRepository = new InMemoryRepository<>();

        Produto produto1 = new Produto(1, "Caneta", 200.00);
        Produto produto2 = new Produto(2, "Chiclete", 2.00);

        produtoRepository.salvar(produto1);
        produtoRepository.salvar(produto2);

        System.out.println("--- Produtos ---");
        for (Produto produto : produtoRepository.getAll()) {
            System.out.println(produto.getId() + " - " + produto.getNome() + " - R$" + produto.getPreco());
        }

        System.out.println("-----------------------------------------------------------------");

        System.out.println("Produto ID 1: " +
                produtoRepository.getId(1).map(Produto::getNome).orElse("Não encontrado"));

        System.out.println("-----------------------------------------------------------------");

        produtoRepository.remover(2);
        System.out.println("Após remover ID 2:");
        for (Produto produto : produtoRepository.getAll()) {
            System.out.println(produto.getId() + "-" + produto.getNome());
        }

        System.out.println("-----------------------------------------------------------------");

        Funcionario f1 = new Funcionario("F001", "Ana", 5000.0);
        Funcionario f2 = new Funcionario("F002", "Carlos", 6200.0);

        funcionarioRepository.salvar(f1);
        funcionarioRepository.salvar(f2);

        System.out.println("--- Funcionários ---");
        for (Funcionario f : funcionarioRepository.getAll()) {
            System.out.println(f.getId() + " - " + f.getNome() + " - R$" + f.getSalario());
        }

        System.out.println("-----------------------------------------------------------------");

        try {
            funcionarioRepository.remover("F999");
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("Erro: " + e.getMessage());
        }


        System.out.println("-----------------------------------------------------------------");
        System.out.println("");
        System.out.println("========================== Exercício 8 ==========================");

        NumberFormat formatoMoeda = NumberFormat.getCurrencyInstance(new Locale("pt", "BR"));

        Pedido pedido = new Pedido("58000000", new BigDecimal("250.00"), new FreteSedex());
        System.out.println("Frete com Sedex: " + formatoMoeda.format(pedido.calcularFrete()));

        System.out.println("-----------------------------------------------------------------");

        pedido.setEstrategiaFrete(new FretePac());
        System.out.println("Frete com PAC: " + formatoMoeda.format(pedido.calcularFrete()));

        System.out.println("-----------------------------------------------------------------");

        pedido.setEstrategiaFrete(new RetiradaNaLoja());
        System.out.println("Frete com Retirada na Loja: " + formatoMoeda.format(pedido.calcularFrete()));

        System.out.println("-----------------------------------------------------------------");

        CalculadoraFrete fretePromocional = (p) -> {
            BigDecimal limite = new BigDecimal("200.00");
            if (p.getValor().compareTo(limite) >= 0) {
                return BigDecimal.ZERO;
            }
            return new BigDecimal("15.00");
        };

        pedido.setEstrategiaFrete(fretePromocional);
        System.out.println("Frete com Promoção: " + formatoMoeda.format(pedido.calcularFrete()));

        System.out.println("-----------------------------------------------------------------");

        Pedido pedido2 = new Pedido("58000000", new BigDecimal("150.00"), fretePromocional);
        System.out.println("Frete promocional (pedido < 200): " + formatoMoeda.format(pedido2.calcularFrete()));
    }
}
