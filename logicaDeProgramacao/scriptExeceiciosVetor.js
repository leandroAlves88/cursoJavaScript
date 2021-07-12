let vetor=[];
//console.log(vetor);

for (let i = 15; i<=50; i=i+10){
    vetor.push(i);
}
// for of ele coloca todo o vetor em uma variável específica para varrer o vetor.
for (exibeVetor of vetor ){
    console.log(exibeVetor);
}
// for indice
for (indiceVetor in vetor){
    console.log('Posição: '+indiceVetor+' Valor: '+vetor[indiceVetor]);
}
console.log('testa remove vetor');
vetor.pop();
for (exibeVetor of vetor ){
    console.log(exibeVetor);
}
console.log('testa adiciona vetor');
vetor.push(105+15);
vetor.push('Leandro');
vetor.push(true);

for (exibeVetor of vetor ){
    console.log(exibeVetor);
}
console.log('testa remover inicio vetor')
vetor.shift();
for (exibeVetor of vetor ){
    console.log(exibeVetor);
}

console.log('Copiar Vetor');
let copiaVetor = vetor.slice();

console.log(copiaVetor);
