let num1;
let num2;
let resultado;
let numero;

function sobra() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero"));

    resultado = num1 % num2
    numero = resultado % 2;                                                            

    alert ("O resultado é " + resultado + ".")
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("ímpar")
    }

}
function multiplicaçao() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero"));

    resultado = num1 * num2;
    numero = resultado % 2;                                                            

    alert ("O resultado é " + resultado + ".")
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("ímpar")
    }

}
function adiçao() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero"));

    resultado = num1 + num2;
    numero = resultado % 2;                                                            

    alert ("O resultado é " + resultado + ".")
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("ímpar")
    }

}
function divisao() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero"));

    resultado = num1 / num2;
    numero = resultado % 2;                                                            

    alert ("O resultado é " + resultado + ".")
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("ímpar")
    }

}
function subtraçao() {
    num1 = Number (window.prompt("Digite o primeiro numero"));
    num2 = Number (window.prompt("Digite o segundo numero"));

    resultado = num1 - num2;
    numero = resultado % 2;                                                            

    alert ("O resultado é " + resultado + ".")
    if (numero == 0) {
        alert ("Par");
    } else {
        alert ("ímpar")
    }
}


