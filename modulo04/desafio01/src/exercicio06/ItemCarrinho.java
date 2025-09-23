package exercicio06;

public class ItemCarrinho {
    private final ProdutosDisponiveis produto;
    private final int quantidade;

    public ItemCarrinho(ProdutosDisponiveis produto, int quantidade) {
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero.");
        }
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public ProdutosDisponiveis getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public Dinheiro getTotal() {
        return produto.getPreco().multiplicar(quantidade);
    }
}
