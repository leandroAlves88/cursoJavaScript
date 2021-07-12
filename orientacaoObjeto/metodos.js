class Quadrado {
    constructor(base,altura){
        if (isNaN(base)||isNaN(altura)) throw "Entrada não é um numero"
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }

    calculaArea(){
        return this.base*this.altura;
    }
}

const quadrado1 = new Quadrado();
console.log(quadrado1.calculaArea());
