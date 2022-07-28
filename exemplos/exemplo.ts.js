"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function sumarNum(num1, num2, devPrinter, frase) {
    let resultado = num1 + num2;
    if (devPrinter) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
let devPrinter = true;
let frase = ' el valor es :';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(sumarNum(Number(input1.value), Number(input2.value), devPrinter, frase));
        }
    });
}
