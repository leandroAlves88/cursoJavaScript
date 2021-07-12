const soma = (a,b) => a+b;
const subtrai = (a,b) => a-b;
const multiplica = (a,b) => a*b;
const divide = (a,b) => a/b;
const calcula = (a,b, operacao) => operacao(a,b);

let resultado = calcula (5,4,subtrai);

console.log(resultado);

//-----------------------------------------
