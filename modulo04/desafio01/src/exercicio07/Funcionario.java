package exercicio07;

public class Funcionario implements Identificavel<String>{
    private final String id;
    private final String nome;
    private final double salario;

    public Funcionario(String id, String nome, double salario) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }

    @Override
    public String getId() {
        return this.id;
    }

    public String getNome() {
        return this.nome;
    }

    public double getSalario() {
        return this.salario;
    }
}
