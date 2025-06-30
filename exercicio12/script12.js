let mostraHTML = document.getElementById("resultado");

function taboada() {
    let numero = prompt("Digite um numero para calcular a taboada.");
    let contador =1;

    mostraHTML.innerHTML = `<p><b>TABOADA<b><p>`;
    while (contador <= 10){
        mostraHTML.innerHTML += `${numero} x ${contador} = ${numero*contador}<br>`
        contador++;
    }
}