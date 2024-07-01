const ler = require('readline-sync');

let playlist = [];
let totalDuracao = 0;

while (true) {
    const titulo = ler.question("Digite o titulo da musica (ou 'pare' para terminar): ");
    if (titulo.toLowerCase() === 'pare') break;

    const artista = ler.question("Digite o artista: ");
    const duracao = ler.questionInt("Digite a duracao da musica em segundos: ", 10);

    playlist.push({ titulo, artista, duracao });
    totalDuracao += duracao;
}

console.log("Playlist:");
for (const musica of playlist) {
    const minutos = Math.floor(musica.duracao / 60);
    const segundos = musica.duracao % 60;
    const duracaoFormatada = `${minutos}m ${segundos}s`;

    console.log(`Titulo: ${musica.titulo}, Artista: ${musica.artista}, Duracao: ${duracaoFormatada}`);
}

const minutosTotais = Math.floor(totalDuracao / 60);
const segundosTotais = totalDuracao % 60;
const duracaoTotalFormatada = `${minutosTotais}m ${segundosTotais}s`;

console.log(`Tempo total: ${duracaoTotalFormatada}`);
