class Quadrado {
    constructor(base,altura){
        
        if (isNaN(base)||isNaN(altura)) throw "Entrada não é um numero"
        let cor = undefined; // encapsulamento de atributo
        this.base = base;
        this.altura = altura;
        this.getCor =()=>{return cor;}// encapsulamento de atributo (metodo para recuperar o valor)
        this.setCor =(c)=>{cor = c}  // encapsulamento de atributo (metodo para inserir o valor)
    }

    calculaArea(){
        return this.base*this.altura;
    }
    imprimeQuadrado(){
        console.log("base: "+quadrado1.base +" altura: "+ quadrado1.altura +" cor: "+quadrado1.getCor());
    }
}

let quadrado1 = new Quadrado(10,20);// criando objeto
console.log(quadrado1.getCor());// exibindo atributo encapsulado;
quadrado1.cor = "verde"; // dessa forma não grava valor no atributo pois está encapsulado. 
console.log(quadrado1.getCor());
quadrado1.setCor("Azul"); // atualiza valor da cor do quadrado;
console.log(quadrado1.getCor());
quadrado1.imprimeQuadrado();