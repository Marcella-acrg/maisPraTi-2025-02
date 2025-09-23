package exercicio08;

import java.math.BigDecimal;

public class FretePac implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("10.00");
    }

}
