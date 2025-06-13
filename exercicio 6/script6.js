let inscritos = 0;
let mostraresultado = document.querySelector('#resultado');
let times = 0;

function inscrever() {
     inscritos += 1
     times = parseInt(inscritos/ 3);

     mostraresultado.innerHTML = `<p>Numero de inscritos: ${inscritos}.</p><p>equipes: ${times}</p>`;

     if(times >= 4){
          alert("Já e possivel iniciae o campeonato, pois temos 4 equipes!")
     }
}

  