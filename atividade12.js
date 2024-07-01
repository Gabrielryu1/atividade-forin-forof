const atividades = {
    transporte: 100, 
    alimentacao: 800,
    energia: 100,
    agua: 400,
    residuos: 200
};


let impactoTotal = 0;
for (const atividade in atividades) {
    impactoTotal += atividades[atividade];
}


let sugestao;
if (impactoTotal > 4000) {
    sugestao = "Seu impacto ambiental é muito alto. Considere reduzir o uso de transporte e energia.";
} else if (impactoTotal > 2000) {
    sugestao = "Seu impacto ambiental é moderado. Tente reduzir o consumo de energia e água.";
} else {
    sugestao = "Seu impacto ambiental é baixo. Continue assim e busque sempre melhorar.";
}
    

console.log(`Impacto Total: ${impactoTotal} unidades de carbono.`);
console.log(sugestao);
