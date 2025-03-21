function atividade1() {
    console.log("1. Verificação de Par ou Ímpar");
    function verificarPar(num) {
        console.log(num % 2 === 0 ? "Par" : "Ímpar");
    }
    verificarPar(5); 
}

function atividade2() {
    console.log("2. Operações Matemáticas Simples");
    function calcular(a, b) {
        console.log("Soma:", a + b);
        console.log("Subtração:", a - b);
        console.log("Multiplicação:", a * b);
        console.log("Divisão:", a / b);
    }
    calcular(10, 2); 
}

function atividade3() {
    console.log("3. Laço While para Contagem Regressiva");
    let i = 10;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}

function atividade4() {
    console.log("4. Manipulação de Strings");
    function inverterTexto(str) {
        return str.split("").reverse().join("");
    }
    console.log(inverterTexto("JavaScript")); 
}

function atividade5() {
    console.log("5. Contagem de Caracteres em uma String");
    function contarCaracteres(str) {
        return str.length;
    }
    console.log("Total de caracteres:", contarCaracteres("OpenAI")); 
}

function atividade6() {
    console.log("6. Acessando Propriedades de Objetos");
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2021
    };
    console.log("Modelo:", carro.modelo);
}

function atividade7() {
    console.log("7. Função com Parâmetros Opcionais");
    function mensagemPersonalizada(nome, mensagem = "Olá!") {
        console.log(`${mensagem} ${nome}`);
    }
    mensagemPersonalizada("Lucas");
    mensagemPersonalizada("Ana", "Bem-vinda!");
}

function atividade8() {
    console.log("8. Calculadora de Média");
    function media(a, b, c) {
        return (a + b + c) / 3;
    }
    console.log("Média:", media(7, 8, 9)); 
}

function atividade9() {
    console.log("9. Laço for com Condição");
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            console.log(i, "- Múltiplo de 3");
        } else {
            console.log(i, "- Não múltiplo de 3");
        }
    }
}

function atividade10() {
    console.log("10. Verificação de Palavra Palíndroma");
    function verificarPalindromo(palavra) {
        const invertida = palavra.split("").reverse().join("");
        return palavra === invertida;
    }
    console.log("É palíndromo?", verificarPalindromo("arara")); 
    console.log("É palíndromo?", verificarPalindromo("carro")); 
}
