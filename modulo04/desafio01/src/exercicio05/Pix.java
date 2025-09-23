package exercicio05;

public class Pix extends FormaDePagamento{
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        if(chavePix == null || chavePix.isEmpty()) {
            throw new PagamentoInvalidoException("Chave pix não pode ser vazia!");
        }

        if(!(chavePix.matches("\\d{11}") || chavePix.contains("@") || chavePix.matches("\\+55\\d{11}"))) {
            throw new PagamentoInvalidoException("Chave Pix Inválida!");
        }
    }
}
