function atividade11() {
    console.log("11. Verificação de Número Positivo ou Negativo");
    function verificarSinal(num) {
        if (num > 0) console.log("Positivo");
        else if (num < 0) console.log("Negativo");
        else console.log("Zero");
    }
    verificarSinal(-3); 
}

function atividade12() {
    console.log("12. Converter Celsius em Fahrenheit");
    function converterTemperatura(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    console.log("Fahrenheit:", converterTemperatura(25)); 
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
    function substituirPalavra(texto) {
        return texto.replace(/azul/g, "vermelho");
    }
    console.log(substituirPalavra("O carro azul está na casa azul."));
}

function atividade15() {
    console.log("15. Verificação de Tamanho de String");
    function verificarTamanho(str) {
        console.log(str.length > 10 ? "Mais de 10 caracteres" : "10 ou menos caracteres");
    }
    verificarTamanho("JavaScript!"); 
}

function atividade16() {
    console.log("16. Criando e Acessando Array");
    const frutas = ["Maçã", "Banana", "Uva", "Laranja", "Manga"];
    console.log("Terceira fruta:", frutas[2]);
}

function atividade17() {
    console.log("17. Função com Valor Padrão em Dois Parâmetros");
    function saudacao(nome, saudacao = "Bem-vindo(a)") {
        return `${saudacao}, ${nome}`;
    }
    console.log(saudacao("Carlos"));
    console.log(saudacao("Maria", "Olá"));
}

function atividade18() {
    console.log("18. Verificação de Nota");
    function verificarAprovacao(nota) {
        return nota >= 6 ? "Aprovado" : "Reprovado";
    }
    console.log(verificarAprovacao(7));
    console.log(verificarAprovacao(5));
}

function atividade19() {
    console.log("19. Laço for para Contagem de Pares");
    for (let i = 0; i <= 30; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function atividade20() {
    console.log("20. Contagem de Vogais");
    function contarVogais(palavra) {
        const vogais = palavra.match(/[aeiouAEIOU]/g);
        return vogais ? vogais.length : 0;
    }
    console.log("Vogais:", contarVogais("Javascript"));
}

function atividade21() {
    console.log("21. Soma dos Elementos de um Array");
    function somarArray(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }
    console.log("Soma:", somarArray([1, 2, 3, 4, 5]));
}

function atividade22() {
    console.log("22. Função para Dobrar Números");
    function dobrarNumero(num) {
        return num * 2;
    }
    console.log("Dobro:", dobrarNumero(7));
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
    function capitalizar(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    console.log(capitalizar("javascript"));
}

function atividade25() {
    console.log("25. Verificação de Ano Bissexto");
    function anoBissexto(ano) {
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    }
    console.log("2024 é bissexto?", anoBissexto(2024));
    console.log("2023 é bissexto?", anoBissexto(2023));
}
