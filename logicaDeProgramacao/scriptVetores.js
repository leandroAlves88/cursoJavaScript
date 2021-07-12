let vetor=[10,20,30,40,50];
console.log(vetor[3]);

vetor[3] = 100;
console.log(vetor[3]);

console.log (vetor);

// adicionando valor ao vetor

let vetor2 = [];
for(let i = 10; i<=30;i=i+10){
    vetor2.push(i) ;
}
console.log(vetor2);

for (let i = 0; i<vetor2.length; i++){
    console.log(vetor2[i]);

}
// maneiras de percorrer vetor
//for of
for (let numero of vetor2){
    console.log(numero);
}
//for in
for (let indice in vetor2){
    console.log('Posição: '+ indice + ' do vetor possui o Valor: '+ vetor2[indice]);
}

// Trabalahdno com Matriz

