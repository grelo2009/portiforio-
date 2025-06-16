let mostraresultado = document.querySelector('#resultado');
let janeiro = "verão"
let fevereiro = "verão"
let março = "outono"
let abril = "outono"
let maio = "outono"
let junho = "inverno"
let julho = "inverno"
let agosto = "inverno"
let setembro = "primavera"
let outubro = "primavera"
let novembro = "primavera"
let dezembro = "verão"

function mes() {
    let ano = window.prompt("Mês do ano:").toUpperCase();
       if(ano == "JANEIRO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${janeiro}</p>`;
        mostraresultado.style.color = "red";
    }
       if(ano == "FEVEREIRO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${fevereiro}</p>`;
        mostraresultado.style.color = "red";
    }
       if(ano == "MARÇO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${março}</p>`;
        mostraresultado.style.color = "blue";
    }
       if(ano == "ABRIL"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${abril}</p>`;
        mostraresultado.style.color = "blue";
    }
       if(ano == "MAIO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${maio}</p>`;
        mostraresultado.style.color = "blue";
    }
       if(ano == "JUNHO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${junho}</p>`;
        mostraresultado.style.color = "pink";
    }
       if(ano == "JULHO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${julho}</p>`;
        mostraresultado.style.color = "pink";
    }
       if(ano == "AGOSTO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${agosto}</p>`;
        mostraresultado.style.color = "pink";
    }
       if(ano == "SETEMBRO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${setembro}</p>`;
        mostraresultado.style.color = "grean";
    }
       if(ano == "OUTUBRO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${outubro}</p>`;
        mostraresultado.style.color = "grean";
    }
       if(ano == "NOVEMBRO"){
        mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${novembro}</p>`;
        mostraresultado.style.color = "grean";
    }
       if(ano == "DEZEMBRO"){
       mostraresultado.innerHTML = `<p> você esta nessa estação do ano: ${dezembro}</p>`;
       mostraresultado.style.color = "red";
    }
}
