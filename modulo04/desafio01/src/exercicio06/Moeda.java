package exercicio06;

public enum Moeda {
    BRL("R$"),
    USD("$"),
    EUR("€");

    private final String simbolo;

    Moeda(String simbolo) {
        this.simbolo = simbolo;
    }

    public String getSimbolo() {
        return simbolo;
    }
}
