function atividade1() {
    console.log("1. Verificação de Par ou Ímpar");
    let num = parseInt(prompt("Digite um número:"));
    console.log(num % 2 === 0 ? "Par" : "Ímpar");
}

function atividade2() {
    console.log("2. Operações Matemáticas Simples");
    let a = parseFloat(prompt("Digite o primeiro número:"));
    let b = parseFloat(prompt("Digite o segundo número:"));
    console.log("Soma:", a + b);
    console.log("Subtração:", a - b);
    console.log("Multiplicação:", a * b);
    console.log("Divisão:", a / b);
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
    let texto = prompt("Digite um texto:");
    console.log(texto.split("").reverse().join(""));
}

function atividade5() {
    console.log("5. Contagem de Caracteres em uma String");
    let texto = prompt("Digite uma string:");
    console.log("Total de caracteres:", texto.length);
}

function atividade6() {
    console.log("6. Acessando Propriedades de Objetos");
    const carro = { marca: "Toyota", modelo: "Corolla", ano: 2021 };
    console.log("Modelo:", carro.modelo);
}

function atividade7() {
    console.log("7. Função com Parâmetros Opcionais");
    let nome = prompt("Digite o nome:");
    let mensagem = prompt("Digite a mensagem (ou deixe em branco para 'Olá!'):");
    mensagem = mensagem || "Olá!";
    console.log(`${mensagem} ${nome}`);
}

function atividade8() {
    console.log("8. Calculadora de Média");
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    let n3 = parseFloat(prompt("Digite o terceiro número:"));
    console.log("Média:", (n1 + n2 + n3) / 3);
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
    let palavra = prompt("Digite uma palavra:");
    let invertida = palavra.split("").reverse().join("");
    console.log("É palíndromo?", palavra === invertida);
}
