function contar() {
    let mostraresultado = document.getElementById(`resultado`);
    mostraresultado.innerHTML = `<p><b> Contando de 10 a 1</p></b>`;
    let contador = 10;

    while (contador >= 1){
        let numero = contador % 2;

        if (numero == 0){
            mostraresultado.innerHTML += `<mark> ${contador}</mark> &#10037;`;
        }else{
        mostraresultado.innerHTML += `${contador} &#10037;`;
    }
    contador+=1;     
    }
 }