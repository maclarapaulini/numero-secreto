let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clickConsole() {
    console.log("O botão foi clicado!");
}

function clickAlerta() {
    alert('Eu amo JS!');
}

function clickPrompt() {
    let cidade = prompt('Escolha uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function clickSoma() {
    let numA = parseInt(prompt('Insira o primeiro número:'));
    let numB = parseInt(prompt('Insira o segundo número:'));
    let soma = numA + numB;

    alert(`O resultado desta soma é ${soma}`);
}
