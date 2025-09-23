package exercicio05;

public class CartaoDeCredito extends FormaDePagamento{
    private String numeroDoCartao;

    public CartaoDeCredito(String numeroDoCartao) {
        this.numeroDoCartao = numeroDoCartao;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        if(numeroDoCartao == null || !numeroDoCartao.matches("\\d{16}")) {
            throw new PagamentoInvalidoException("Número do cartão de crédito inválido!");
        }
    }
}
