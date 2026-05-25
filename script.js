
function calcularMDC(a, b) {
    
    if (a < b) {
        let temp = a;
        a = b;
        b = temp;
    }
    
    
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    
    return a;
}


function exibirResultado(texto, tipo) {
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = texto;
    elementoResultado.className = 'resultado ' + tipo;
}


function limparResultado() {
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = '';
    elementoResultado.className = 'resultado vazio';
}


function calcular() {
    
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    
    
    if (numero1 === '' || numero2 === '') {
        exibirResultado(
            '<div class="resultado-texto">❌ Por favor, preencha os dois campos!</div>',
            'erro'
        );
        return;
    }
    
    
    let num1 = parseInt(numero1);
    let num2 = parseInt(numero2);
    
    
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        exibirResultado(
            '<div class="resultado-texto">❌ Digite números inteiros não negativos!</div>',
            'erro'
        );
        return;
    }
    
    
    if (num1 === 0 && num2 === 0) {
        exibirResultado(
            '<div class="resultado-texto">❌ Pelo menos um número deve ser diferente de zero!</div>',
            'erro'
        );
        return;
    }
    
    
    const resultado = calcularMDC(num1, num2);
    
    exibirResultado(
        `<div class="resultado-texto">MDC de ${num1} e ${num2}:</div>
         <div class="resultado-valor">${resultado}</div>`,
        'sucesso'
    );
}


document.getElementById('botaoCalcular').addEventListener('click', calcular);


document.getElementById('numero1').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcular();
    }
});

document.getElementById('numero2').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcular();
    }
});


document.getElementById('numero1').addEventListener('focus', limparResultado);
document.getElementById('numero2').addEventListener('focus', limparResultado);
