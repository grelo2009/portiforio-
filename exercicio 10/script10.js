function contar() {
    let mostraresultado = document.getElementById('resultado');

    mostraresultado.innerHTML = `<p><b>Contado de 1 até 10</b></p>`;

    let contador = 1;


    while(contador <= 10){
          contador +=1;
       if (resultado == 0) {
            mostraresultado.innerHTML += `${contador}, &#9827`;
        }                                                     
        
    } 
}
