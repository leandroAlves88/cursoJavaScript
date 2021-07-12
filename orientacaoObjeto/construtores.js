class Pessoa{

    constructor(nome,idade){
    this.nome = nome,
    this.idade = idade
    }

}
class Agenda {
    constructor(contato){
    this.contato = contato; 
    }   

}

class Quadrado {
    constructor(base,altura){
        if (isNaN(base)||isNaN(altura)) throw "Entrada não é um numero"
        this.base = base;
        this.altura = altura;
    }
}

const pessoa1 = new Pessoa("Jose",30);
console.log(pessoa1);
console.log("Testa Quadrado");
const quadrado1 = new Quadrado(10,"vinte");
console.log(quadrado1);