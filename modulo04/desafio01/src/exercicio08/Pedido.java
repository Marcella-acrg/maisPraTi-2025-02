package exercicio08;

import java.math.BigDecimal;

public class Pedido {
    private final String cep;
    private final BigDecimal valor;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(String cep, BigDecimal valor, CalculadoraFrete estrategiaFrete) {
        if (cep == null || !cep.matches("\\d{8}")) {
            throw new IllegalArgumentException("CEP inválido: " + cep);
        }
        if (valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor do pedido não pode ser negativo");
        }
        this.cep = cep;
        this.valor = valor;
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }

    public void setEstrategiaFrete(CalculadoraFrete estrategiaFrete) {
        this.estrategiaFrete = estrategiaFrete;
    }

    public String getCep() {
        return cep;
    }

    public BigDecimal getValor() {
        return valor;
    }
}
