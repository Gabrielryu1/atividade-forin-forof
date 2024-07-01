const ler = require('readline-sync');

const sujeitos = ["radahn", "malenia", "radagon", "rennala", "rellana"];
const verbos = ["matou", "encontrou", "quebrou", "pisou", "esmagou"];
const objetos = ["um cranio", "uma perna", "um coracao", "uma raca", "uma divindade"];

for (let i = 0; i < 5; i++) {
    const sujeitoIndex = Math.floor(Math.random() * sujeitos.length);
    const verboIndex = Math.floor(Math.random() * verbos.length);
    const objetoIndex = Math.floor(Math.random() * objetos.length);

    const sujeito = sujeitos[sujeitoIndex];
    const verbo = verbos[verboIndex];
    const objeto = objetos[objetoIndex];

    console.log(`${sujeito} ${verbo} ${objeto}.`);
}
