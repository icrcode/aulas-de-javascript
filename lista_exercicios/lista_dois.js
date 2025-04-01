function atividade11() {
    console.log("11. Verificação de Número Positivo ou Negativo");
    let num = parseFloat(prompt("Digite um número:"));
    if (num > 0) console.log("Positivo");
    else if (num < 0) console.log("Negativo");
    else console.log("Zero");
}

function atividade12() {
    console.log("12. Converter Celsius em Fahrenheit");
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    console.log("Fahrenheit:", (celsius * 9 / 5) + 32);
}

function atividade13() {
    console.log("13. Laço While para Somatório");
    let i = 1, soma = 0;
    while (i <= 100) {
        soma += i;
        i++;
    }
    console.log("Somatório de 1 a 100:", soma);
}

function atividade14() {
    console.log("14. Substituição de Palavras em String");
    let texto = prompt('Digite uma frase com a palavra "azul":');
    console.log(texto.replace(/azul/g, "vermelho"));
}

function atividade15() {
    console.log("15. Verificação de Tamanho de String");
    let texto = prompt("Digite uma string:");
    console.log(texto.length > 10 ? "Mais de 10 caracteres" : "10 ou menos caracteres");
}

function atividade16() {
    console.log("16. Criando e Acessando Array");
    const frutas = ["Maçã", "Banana", "Uva", "Laranja", "Manga"];
    console.log("Terceira fruta:", frutas[2]);
}

function atividade17() {
    console.log("17. Função com Valor Padrão em Dois Parâmetros");
    let nome = prompt("Digite o nome:");
    let saud = prompt("Digite a saudação (ou deixe em branco para 'Bem-vindo(a)'):");
    saud = saud || "Bem-vindo(a)";
    console.log(`${saud}, ${nome}`);
}

function atividade18() {
    console.log("18. Verificação de Nota");
    let nota = parseFloat(prompt("Digite a nota:"));
    console.log(nota >= 6 ? "Aprovado" : "Reprovado");
}

function atividade19() {
    console.log("19. Laço for para Contagem de Pares");
    for (let i = 0; i <= 30; i++) {
        if (i % 2 === 0) console.log(i);
    }
}

function atividade20() {
    console.log("20. Contagem de Vogais");
    let palavra = prompt("Digite uma palavra:");
    const vogais = palavra.match(/[aeiouAEIOU]/g);
    console.log("Quantidade de vogais:", vogais ? vogais.length : 0);
}

function atividade21() {
    console.log("21. Soma dos Elementos de um Array");
    let valores = prompt("Digite números separados por vírgula:").split(",").map(Number);
    console.log("Soma:", valores.reduce((acc, val) => acc + val, 0));
}

function atividade22() {
    console.log("22. Função para Dobrar Números");
    let num = parseFloat(prompt("Digite um número:"));
    console.log("Dobro:", num * 2);
}

function atividade23() {
    console.log("23. Laço While para Contagem de Pares");
    let i = 2;
    while (i <= 20) {
        console.log(i);
        i += 2;
    }
}

function atividade24() {
    console.log("24. Capitalizar Primeira Letra");
    let texto = prompt("Digite uma palavra:");
    console.log(texto.charAt(0).toUpperCase() + texto.slice(1));
}

function atividade25() {
    console.log("25. Verificação de Ano Bissexto");
    let ano = parseInt(prompt("Digite o ano:"));
    let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    console.log("É bissexto?", bissexto);
}