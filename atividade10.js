const readlineSync = require('readline-sync');


let doacoes = [
    { nome: "zigueira", valor: 2100 },
    { nome: "bill", valor: 1999 },
    { nome: "RYU", valor: 21000 },
    { nome: "brabox", valor: 22 }
];


let instituicoes = ["Instituicao A", "Instituicao B", "Instituicao C", "Instituicao D"];


let distribuicao = {};
for (const instituicao of instituicoes) {
    distribuicao[instituicao] = [];
}


let index = 0;
for (const doacao of doacoes) {
    let instituicao = instituicoes[index % instituicoes.length];
    distribuicao[instituicao].push(doacao);
    index++;
}

console.log("Distribuição das Doações:");
for (const instituicao of instituicoes) {
    console.log(`\n${instituicao}:`);
    for (const doacao of distribuicao[instituicao]) {
        console.log(`  Doador: ${doacao.nome}, Valor: $${doacao.valor}`);
    }
}
