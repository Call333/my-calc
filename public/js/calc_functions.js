// Buttuons
function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === Infinity) return;
    if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '0';
}

var operador = ''
var valor1 = 0

function atualizarOperacao(btn){
    const display = document.getElementById('display');
    operador = btn.getAttribute('operacao');
    valor1 = display.value;
    // display.value = '0';
}
// =
function calcularOperacao(){
    const display = document.getElementById('display');
    const valor2 = display.value;
    valor1 = eval(valor2);
    display.value = valor1;
    operador = '';
}    

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}
