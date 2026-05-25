// Função para calcular MDC usando o Algoritmo de Euclides
function calcularMDC(a, b) {
    // Garantir que a >= b
    if (a < b) {
        let temp = a;
        a = b;
        b = temp;
    }
    
    // Algoritmo de Euclides: mdc(a, b) = mdc(b, a % b)
    // Parada: mdc(a, 0) = a
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    
    return a;
}

// Função para exibir o resultado
function exibirResultado(texto, tipo) {
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = texto;
    elementoResultado.className = 'resultado ' + tipo;
}

// Função para limpar o resultado
function limparResultado() {
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = '';
    elementoResultado.className = 'resultado vazio';
}

// Função principal para realizar o cálculo
function calcular() {
    // Obter os valores dos inputs
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    
    // Validar se os campos estão preenchidos
    if (numero1 === '' || numero2 === '') {
        exibirResultado(
            '<div class="resultado-texto">❌ Por favor, preencha os dois campos!</div>',
            'erro'
        );
        return;
    }
    
    // Converter para números inteiros
    let num1 = parseInt(numero1);
    let num2 = parseInt(numero2);
    
    // Validar se são números válidos e não negativos
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        exibirResultado(
            '<div class="resultado-texto">❌ Digite números inteiros não negativos!</div>',
            'erro'
        );
        return;
    }
    
    // Validar se pelo menos um número é diferente de zero
    if (num1 === 0 && num2 === 0) {
        exibirResultado(
            '<div class="resultado-texto">❌ Pelo menos um número deve ser diferente de zero!</div>',
            'erro'
        );
        return;
    }
    
    // Calcular o MDC
    const resultado = calcularMDC(num1, num2);
    
    // Exibir resultado com sucesso
    exibirResultado(
        `<div class="resultado-texto">MDC de ${num1} e ${num2}:</div>
         <div class="resultado-valor">${resultado}</div>`,
        'sucesso'
    );
}

// Adicionar evento ao botão de calcular
document.getElementById('botaoCalcular').addEventListener('click', calcular);

// Permitir calcular ao pressionar Enter
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

// Limpar resultado ao começar a digitar
document.getElementById('numero1').addEventListener('focus', limparResultado);
document.getElementById('numero2').addEventListener('focus', limparResultado);
