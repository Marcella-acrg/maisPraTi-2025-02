package exercicio05;

import java.math.BigDecimal;

public abstract class FormaDePagamento {

    public abstract void validarPagamento() throws PagamentoInvalidoException;

    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento();
        System.out.println("Pagamento de R$: " + valor + " realizado com sucesso via " + this.getClass().getSimpleName());
    }
}


