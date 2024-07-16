let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numSecreto  = numAleatorio();
let tentativas = 1;

function exibirTexto (tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto!');
    exibirTexto('p', 'Escolha um número entre 1 e 10:');
}

exibirMensagemInicial();


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSecreto) {
            exibirTexto('p', 'O número secreto é menor!');
        } else {
            exibirTexto('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

function numAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //gerando num entre 1 e 10
    let quantElementos = listaDeNumerosSorteados.length;

    if (quantElementos == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numSecreto = numAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}