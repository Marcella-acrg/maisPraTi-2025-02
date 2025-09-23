package exercicio03;

import exercicio07.Identificavel;

import java.math.BigDecimal;

public abstract class Funcionario implements Identificavel<String> {
    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        if(salario.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Salário deve ser positivo.");
        }
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public abstract BigDecimal calcularBonus();
}
