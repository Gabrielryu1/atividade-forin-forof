const ler = require('readline-sync');


let biblioteca = [
    { titulo: "tiranossauro rex", autor: "Miguel ", ano: 1700 },
    { titulo: "power rangers", autor: "Leroy jenkis", ano: 1869 },
    { titulo: "jaspion", autor: "minasaki", ano: 1300 },
    { titulo: "winx", autor: "jurubebas", ano: 1989 },
    { titulo: "digimon", autor: "chucrutes", ano: 2000 }
];


for (const livro of biblioteca) {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
}

const criterio = ler.question('Deseja ordenar os livros por "titulo" ou "ano"? ');

if (criterio === 'titulo') {
    biblioteca.sort((a, b) => a.titulo.localeCompare(b.titulo));
} else if (criterio === 'ano') {
    biblioteca.sort((a, b) => a.ano - b.ano);
} else {
    console.log('Critério de ordenação inválido.');
}

console.log("\nLista de livros ordenada:");
for (const livro of biblioteca) {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`);
}
