const ler = require('readline-sync');

const categorias = ["ficcao", "terror", "suspense"];


let classificacoes = [];


for (let i = 0; i < 3; i++) {
    let classificacaopessoal = [];
    console.log(`Usuário ${i + 1}:`);
    for (let x = 0; x < 3; j++) {
        let classificacao = ler.questionInt(`Digite a classificacao para ${categorias[x]} (1-5): `);
        classificacaopessoal.push(classificacao);
    }
    classificacoes.push(classificacaopessoal);
}


for (let i = 0; i < 3; i++) {
    let maxClassificacao = -1;
    let indiceCategoriaPreferida = -1;

    for (let j = 0; j < 3; j++) {
        if (classificacoes[i][j] > maxClassificacao) {
            maxClassificacao = classificacoes[i][j];
            indiceCategoriaPreferida = j;
        }
    }

    console.log(`Recomendação para Usuário ${i + 1}: Assista mais filmes de ${categorias[indiceCategoriaPreferida]}!`);
}
