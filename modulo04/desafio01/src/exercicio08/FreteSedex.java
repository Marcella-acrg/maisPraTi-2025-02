package exercicio08;

import java.math.BigDecimal;

public class FreteSedex implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("20.00");
    }
}

