package exercicio05;

public class Boleto extends FormaDePagamento {
    private String codigoDeBarras;

    public Boleto(String codigoDeBarras) {
        this.codigoDeBarras = codigoDeBarras;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        if(codigoDeBarras == null || !codigoDeBarras.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Código de barras do boleto inválido!");
        }
    }
}
