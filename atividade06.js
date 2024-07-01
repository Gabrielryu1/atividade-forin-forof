const votos = {
    "Candidato A": [
        { nome: "Eleitor sapao", idade: 30 },
        { nome: "Eleitor gorila", idade: 45 }
    ],
    "Candidato B": [
        { nome: "Eleitor cleitin", idade: 25 },
        { nome: "Eleitor gordaumdopc", idade: 50 },
        { nome: "Eleitor zavala", idade: 60 }
    ],
    "Candidato C": [
        { nome: "Eleitor menor RV", idade: 35 }
    ]
};

let totalVotos = {};

Object.keys(votos).forEach(candidato => {
    totalVotos[candidato] = votos[candidato].length;
});

let vencedor = "";
let maxVotos = 0;

Object.keys(totalVotos).forEach(candidato => {
    if (totalVotos[candidato] > maxVotos) {
        maxVotos = totalVotos[candidato];
        vencedor = candidato;
    }
});

if (vencedor) {
    console.log(`O vencedor e ${vencedor} com ${maxVotos} votos.`);
} else {
    console.log("Não ha votos.");
}

console.log("Total de votos por candidato:");
Object.keys(totalVotos).forEach(candidato => {
    console.log(`${candidato}: ${totalVotos[candidato]} votos`);
});
