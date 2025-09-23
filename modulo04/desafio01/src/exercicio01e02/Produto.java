package exercicio01e02;

public class Produto {
    private String nome;
    private double preco;
    private int quantidadeEmEstoque;

    public Produto(String nome, double preco, int quantidadeEmEstoque) {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if(nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("O nome não pode ser nulo ou vazio.");
        }
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        if(preco < 0) {
            throw new IllegalArgumentException("O preço deve ser maior ou igual a zero");
        }
        this.preco = preco;
    }

    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        if(quantidadeEmEstoque < 0) {
            throw new IllegalArgumentException("A quantidade em estoque deve ser maior ou igual a zero");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    public void exibirInformacoes() {
        System.out.println("Nome: " + this.nome);
        System.out.println("Preço: " + this.preco);
        System.out.println("Quantidade em estoque: " + this.quantidadeEmEstoque);
    }

    public void aplicarDesconto(double porcetagem) {
        if(porcetagem < 0 || porcetagem > 50) {
            throw new DescontoInvalidoException("A porcetagem do desconto é inválida");
        }

        double valorDesconto = preco * (porcetagem / 100);
        this.preco = preco - valorDesconto;
    }

    public void retirarDoEstoque(int quantidade) {
        if(quantidade <= 0) {
            throw new IllegalArgumentException("A quantidade de saída deve ser maior que zero.");
        }
        if(quantidade > this.quantidadeEmEstoque) {
            throw new IllegalArgumentException("Quantidade solicitada maior do que a o estoque disponível.");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque - quantidade;
    }
}
