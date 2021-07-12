
let hoje = new Date().getDay();
let dia = null;
console.log(hoje);

switch (hoje){
    case 0:
        dia = 'Domingo';
        break;
    case 1:
        dia = 'Segunda';
        break;
    case 2:
        dia = 'Terça';
        break;
    case 3:
        dia = 'Quarta';
        break;
    case 4:
        dia = 'Quinta';
        break;
    case 5:
        dia = 'Sexta';
        break;
    case 6:
        dia = 'Sabado';
    default:
        console.log('Dia inesistente');

}
console.log('O dia da semana é '+dia);

