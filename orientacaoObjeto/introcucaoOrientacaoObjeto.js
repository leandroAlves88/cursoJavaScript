const pessoa = {
    nome: 'Leandro',
    idade: 32,
    email: 'email@email.com'
}
console.log(pessoa);
console.log(pessoa.nome);

const quadrado = {
    area:10,
    altura:15,
    calculaArea: function(){
        return this.area*this.altura;
    },
    exibeQuadrado: function(){
        console.log("Area: "+this.area +" Altura: "+this.altura);
    }
}

quadrado.exibeQuadrado();
console.log(quadrado.calculaArea());


const agenda = {
    contatos : [
    {nomeContato:'Leandro', telefoneContato:'1111-1111',email:"email@email.com"},
    {nomeContato:'Joao', telefoneContato:'2222-1111',email:"email@email.com"},
    {nomeContato:'Maria', telefoneContato:'3333-1111',email:"email@email.com"},
    ],
    adicionarContato: function (contato){this.contatos.push(contato);}
}
console.log(agenda);
agenda.adicionarContato(agenda.contatos.nome)