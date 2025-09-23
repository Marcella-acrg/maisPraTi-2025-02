package exercicio04;

public class Trem implements IMeioTransporte {
    private int velocidade;
    private final int limiteVelocidade;

    public Trem() {
        this.velocidade = 0;
        this.limiteVelocidade = 60;
    }

    @Override
    public void acelerar() {
        if(this.velocidade < this.limiteVelocidade) {
            this.velocidade += 5;
            System.out.println("Trem acelerando, velocidade atual: " + this.velocidade);
        } else {
            throw new IllegalArgumentException("Trem atingiu o limite de velocidade!");
        }

    }

    @Override
    public void frear() {
        if(this.velocidade > 0) {
            this.velocidade -= 5;
            System.out.println("Trem parando, velocidade atual: " + this.velocidade);
        } else {
            throw new IllegalArgumentException("Trem parado!");
        }
    }
}
