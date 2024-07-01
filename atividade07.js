const ler = require('readline-sync');


let teatro = [
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];

while (true) {
    console.table(teatro);  

    let linha = ler.questionInt('Escolha a linha do assento (0-4): ');
    let coluna = ler.questionInt('Escolha a coluna do assento (0-4): ');

    if (linha >= 0 && linha < 5 && coluna >= 0 && coluna < 5) {
        if (teatro[linha][coluna] === '0') {
            teatro[linha][coluna] = '1';
            console.log('Assento reservado com sucesso.');
        } else {
            console.log('Assento já está ocupado. Escolha outro assento.');
        }
    } else {
        console.log('Escolha inválida. Tente novamente.');
    }

    let continuar = ler.question('Deseja reservar outro assento? (s/n): ');
    if (continuar.toLowerCase() !== 's') {
        break;
    }
}

console.table(teatro);  
