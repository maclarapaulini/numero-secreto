//Criar uma função que exibe "Olá, mundo!" no console.
function saudacao() {
    console.log("Olá, mundo!");
}

saudacao();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudaçao(nome) {
    console.log(`Olá, ${nome}`);
}

saudaçao("Maria Clara");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(num) {
    return num * 2;
}

let resDobro = calcularDobro(7);
console(resDobro);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3)/3;
}

let media = calcularMedia(4, 2, 10);
console.log(media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function comparacao(numA, numB) {
    if (numA > numB) {
        return numA;
    } else {
        return numB;
    }
}

let maiorNum = comparacao(7,9);
console.log(maiorNum);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function calcularQuadrado(numero) {
    return numero * numero;
}

let resultado = calcularQuadrado(8);
console.log(resultado);