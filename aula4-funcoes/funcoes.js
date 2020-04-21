let valor1='';
let valor2='';
let total='';

function capturarValor1(a) {
    valor1 = parseInt(a);
}

function capturarValor2(b) {
    valor2 = parseInt(b);
}

function somar() {
    total = parseInt(valor1) + parseInt(valor2);
    alert('O resultado da soma é:' + total)
}

function subtrair() {
    total = parseInt(valor1) - parseInt(valor2);
    alert('O resultado da soma é:' + total)
}

function multiplicar() {
    total = parseInt(valor1) * parseInt(valor2);
    alert('O resultado da soma é:' + total)
}

function dividir() {
    total = parseInt(valor1) / parseInt(valor2);
    alert('O resultado da soma é:' + total)
}
