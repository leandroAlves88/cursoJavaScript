let vetor = ['10','20','30'];
const convertInt = (x) => parseInt(x);
console.log(vetor);

let vetor2 = vetor.map(convertInt);
let vetor3 = vetor2.map(x => x*x);
console.log(vetor2);
console.log(vetor3);
vetor3.pop();
vetor3.shift();
console.log(vetor3)
let valor = vetor3[0]+3;
console.log(valor);
