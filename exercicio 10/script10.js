function contar() {
    let mostraresultado = document.getElementById('resultado');

    mostraresultado.innerHTML = `<p><b>Contado de 1 até 10</b></p>`;

    let contador = 1;

    while(contador <= 10){
        let numero = contador % 2;

    if (numero == 0) {
        mostraresultado.innerHTML += `<mark> ${contador}</mark> &#x1F449`;

    }else{
        mostraresultado.innerHTML += `${contador} &#x1F449`;
    }
    contador+=1;
}
    mostraresultado.innerHTML += `&#x1F3C1`;
}
