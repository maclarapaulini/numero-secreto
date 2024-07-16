//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas,que serão recebidos como parâmetro.
function calcularIMC(altura, peso) {
    let IMC = peso/(altura*altura);
    return IMC;
}

calcularIMC(1.57, 80);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(num) {
    let fatorial = 1;
    while (num > 1) {
        fatorial *= num;
        num--;
    }
    return fatorial;
}

calcularFatorial(6);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarReais(valorDolar) {
    let valorReais = valorDolar * 4.80;
    return valorReais;
}

converterDolarReais(8.90);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function tamanhoSala(altura, largura) {
    let area = altura * largura;
    let perimetro = (altura * 2) +(largura * 2);
    return area, perimetro;
}

tamanhoSala(8, 4);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function tamanhoCirculo(raio) {
    let pi = 3.14;
    let perimetroCirculo = 2 * pi * raio;
    let areaCirculo = pi * (raio * raio);

    return areaCirculo, perimetroCirculo;
}

tamanhoCirculo(2);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numEscolhido) {
    let i;
    for(i = 1; i < 10; i++){
        let resultado = numEscolhido * i;
        console.log(`${numEscolhido} x ${i} = ${resultado}`);
    }
}

tabuada(8);