let inscritos = 0;
let mostraresultado = document.querySelector('#resultado');

function clicar() {
    inscritos +=1
    mostraresultado.innerHTML = `<p>Contagem: ${inscritos}`
}

function zerar(){
    inscritos = 0
    mostraresultado.innerHTML = `<p>Contagem: ${inscritos}`
}
   

