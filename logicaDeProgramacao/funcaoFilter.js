//----- Função Filter

let vetorNormal = [1,2,3,4,5,6,7,8,9,10];
let validaImpar = vetorNormal.filter(x => x%2 !== 0);
let validaPar = vetorNormal.filter(x => x%2 === 0);
console.log(vetorNormal);
console.log('Valores Par: '+validaPar);
console.log('Valores Impar: '+validaImpar);