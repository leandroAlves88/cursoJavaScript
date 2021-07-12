let numero = 7;

if (numero > 0 ){
    console.log ('Numero informado é ' +numero+ ' é positivo');
}else if (numero == 0 ){
    console.log ('Numero informado é ' +numero+ ' é zero');
}else {
    console.log ('Numero informado é ' +numero+ ' é negativo');
}

//comentário nova condição
let validaNumero = numero % 2 == 0 ? 'par' : 'impar'; // variavel armazena a validação de verdadeiro ou falso do calculo realizado

console.log('Numero recebido: '+ numero +' esse numero é ' + validaNumero);

// condição switch

let sinal = 'verde'
    switch (sinal){
        case 'verde':
            console.log('Pode Passar!'); 
            break;
        
        case 'amarelo':
            console.log('Atenção!');
            break;
        
        case 'vermelho':
            console.log('Pare!');
            break;
        default :
            console.log ('Sinal inválido')
    }
     