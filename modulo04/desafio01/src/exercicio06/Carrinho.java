package exercicio06;

import java.util.Collections;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public Carrinho adicionarItem(ProdutosDisponiveis produto, int quantidade) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.add(new ItemCarrinho(produto, quantidade));
        return new Carrinho(novaLista);
    }

    public Carrinho removerItem(String nomeProduto) {
        List<ItemCarrinho> novaLista = new ArrayList<>();
        for (ItemCarrinho item : itens) {
            if (!item.getProduto().getNome().equalsIgnoreCase(nomeProduto)) {
                novaLista.add(item);
            }
        }
        return new Carrinho(novaLista);
    }

    public Carrinho aplicarCupom(BigDecimal percentual) {
        List<ItemCarrinho> novaLista = new ArrayList<>();
        for (ItemCarrinho item : itens) {
            Dinheiro precoComDesconto = item.getProduto().getPreco().aplicarDesconto(percentual);
            ProdutosDisponiveis produtoComDesconto = new ProdutosDisponiveis(item.getProduto().getNome(), precoComDesconto);
            novaLista.add(new ItemCarrinho(produtoComDesconto, item.getQuantidade()));
        }
        return new Carrinho(novaLista);
    }

    public Dinheiro getTotal() {
        BigDecimal soma = BigDecimal.ZERO;
        Moeda moeda = null;

        for (ItemCarrinho item : itens) {
            if (moeda == null) {
                moeda = item.getProduto().getPreco().getMoeda();
            }
            soma = soma.add(item.getTotal().getValor());
        }
        return new Dinheiro(soma, moeda == null ? Moeda.BRL : moeda);
    }
}
