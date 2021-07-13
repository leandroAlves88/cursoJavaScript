class Quadrado {

    constructor(base,altura){
        if(isNaN(base) || isNaN(altura)) throw "Dados de entrada inválidos"
        this.base = base;
        this.altura = altura;
        this._cor = undefined; // atributo privado com metodo de acesso
    }

    get cor () {return this._cor}; //metodos de acesso get para recuperar o valor
    
    set cor (cor) {
        if(cor !== "vermelho" && cor !== "azul" && cor !=="verde") {
            throw "Inserir apenas as cores vermelho, azul ou verde"
        };
        this._cor = cor // metodo de acesso para redefinir o atributo
    }; 
    
    imprimeQuadrado = () => {console.log("Base: "+this.base+" /Altura: "+this.altura +
                            " /Cor: "+ this.cor + " /Area do quadrado: "+ this.calculaArea())}
    
    calculaArea = () =>{
        return this.base*this.altura;
    }
}

const quadrado1 = new Quadrado(20,10);
quadrado1.cor="azul";
quadrado1.imprimeQuadrado();