const ler = require('readline-sync');

let filmes = [
    { titulo: "A", avaliacoes: [], media: 0 },
    { titulo: "B", avaliacoes: [], media: 0 },
    { titulo: "C", avaliacoes: [], media: 0 }
];

while (true) {
    console.log("Filmes disponiveis:");
    filmes.forEach((filme, index) => {
        console.log(`${index + 1}. ${filme.titulo} (Media de avaliacoes: ${filme.media})`);
    });

    const escolhaFilme = ler.questionInt('Escolha um filme para avaliar (0 para sair): ');
    if (escolhaFilme === 0) break;

    if (escolhaFilme < 1 || escolhaFilme > filmes.length) {
        console.log("Escolha invalida. Tente novamente.");
        continue;
    }

    const avaliacao = ler.questionInt('Dê sua avaliacao (1-5): ');

    if (avaliacao < 1 || avaliacao > 5) {
        console.log("Avaliacao invalida. Tente novamente.");
        continue;
    }

    const filmeSelecionado = filmes[escolhaFilme - 1];
    filmeSelecionado.avaliacoes.push(avaliacao);

    let somaAvaliacoes = 0;
    for (let avaliacao of filmeSelecionado.avaliacoes) {
        somaAvaliacoes += avaliacao;
    }
    filmeSelecionado.media = (somaAvaliacoes / filmeSelecionado.avaliacoes.length).toFixed(2);

    let categoria;
    switch (avaliacao) {
        case 1:
        case 2:
            categoria = "Ruim";
            break;
        case 3:
            categoria = "Medio";
            break;
        case 4:
        case 5:
            categoria = "brabo";
            break;
        default:
            categoria = "Indefinido";
    }

    console.log(`Voce avaliou o filme "${filmeSelecionado.titulo}" como ${categoria}.`);
}

console.log("Avaliacoes finais:");
console.table(filmes);
