const ler = require('readline-sync');

const az = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Y']
];

console.log("Matriz de letras:");
console.table(az);

let mensagemOculta = [];

const numeroCaracteres = ler.questionInt('Quantos caracteres tera a mensagem oculta? ');

for (let i = 0; i < numeroCaracteres; i++) {
    const linha = ler.questionInt(`Escolha a linha do ${i + 1}º caractere (0-4): `);
    const coluna = ler.questionInt(`Escolha a coluna do ${i + 1}º caractere (0-4): `);

    if (linha >= 0 && linha < 5 && coluna >= 0 && coluna < 5) {
        mensagemOculta.push(az[linha][coluna]);
    } else {
        console.log("Escolha errada, tente novamente.");
        i--; 
    }
}

console.log("Mensagem Oculta:");
console.log(mensagemOculta.join(''));
