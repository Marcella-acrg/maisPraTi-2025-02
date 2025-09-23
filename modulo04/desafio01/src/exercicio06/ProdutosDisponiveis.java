package exercicio06;

public class ProdutosDisponiveis {
    private final String nome;
    private final Dinheiro preco;

    public ProdutosDisponiveis(String nome, Dinheiro preco) {
        if (nome == null || nome.isBlank()) {
            throw new IllegalArgumentException("Nome não pode ser vazio.");
        }
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public Dinheiro getPreco() {
        return preco;
    }
}
