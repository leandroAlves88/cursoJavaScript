
//execução do codigo após o evento Carregar a pagina


window.addEventListener("load", () => {

    const botaoPara = document.getElementById("botaoParar");
    const botaoInicia = document.getElementById("botaoIniciar");

    var segundos = 180;
    var guardaContagem = 0;

    botaoInicia.addEventListener("click",() =>{
// tempo em segundos que queremos.

    if(segundos===0){
        segundos = guardaContagem;
    }
    
    const countDiv = document.getElementById("timer");
    const secpass = () => {
        
        
        let minutos = Math.floor(segundos/60);
        let segundoRestante = segundos%60;

        if (segundoRestante<10){
            segundoRestante = "0" + segundoRestante;
        }

        if (minutos<10){
            minutos= "0" + minutos;
        }
        // vai gerar o formato 00:00 e exibir no navegador
        countDiv.innerHTML = minutos + ":"+ segundoRestante;

        //condição Final para decrementar o contador
        if (segundos>0){
            segundos = segundos - 1;
        }
        else{
            countDiv.innerHTML = "Acabou!";
        }
    };

    const countDown = setInterval(() => secpass(),1000);
});

    botaoPara.addEventListener("click",() =>{
        const countDiv = document.getElementById("timer");
        
        guardaContagem = segundos;
        
         countDiv.innerHTML = "00:00";
         segundos = 0;
    });

});