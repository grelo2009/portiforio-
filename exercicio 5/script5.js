let mostraresultado = document.querySelector('#resultado');
let aleatorio = parseInt(Math.random () *101)
let jogador;
let tentativas = 0;

function pensar() {
    jogador = Number(window.prompt("Digite um numero de 1 a 100"));
    
    if (jogador > 0 && jogador < 101){

        tentativas += 1;

    if (jogador != aleatorio) {

        if(jogador > aleatorio) {
            mostraresultado.innerHTML += `<p><b>TENTATIVAS ${tentativas}: Você tentou o numero ${jogador}, tente um numero MENOR!</p>`;
        } else {
            mostraresultado.innerHTML += `<p><b>TENTATIVAS ${tentativas}: Você tentou o numero ${jogador}, tente um numero MAIOR!</p>`; 
        }
    } else {
        mostraresultado.innerHTML += `<p><b>Parabens ! Voce acertou o numero ${aleatorio}.</b></p>`;
    }
 }
}
