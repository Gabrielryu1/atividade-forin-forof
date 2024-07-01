const ler = require('readline-sync');

let players = [
    { nome: "bufalo bill", pontuacao: 2500 },
    { nome: "billy the kid", pontuacao: 3000 },
    { nome: "john marston", pontuacao: 1500 },
    { nome: "carl johnson", pontuacao: 2000 },
    { nome: "negobranklin", pontuacao: 3500 }
];

players.sort((a, b) => b.pontuacao - a.pontuacao);

console.log("Ranking de Jogadores:");
for (let i = 0; i < players.length; i++) {
    console.log(`${i + 1}. ${players[i].nome} - ${players[i].pontuacao} pontos`);
}

let novoapelido = ler.question('Digite o nome do novo jogador: ');
let novaPontuacao = ler.questionInt('Digite a pontuacao do novo jogador: ');

players.push({ nome: novoapelido, pontuacao: novaPontuacao });

players.sort((a, b) => b.pontuacao - a.pontuacao);

console.log("\nRanking de Jogadores Atualizado:");
for (let i = 0; i < players.length; i++) {
    console.log(`${i + 1}. ${players[i].nome} - ${players[i].pontuacao} pontos`);
}
