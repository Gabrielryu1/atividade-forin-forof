
let quadrado = [];
for (let i = 0; i < 10; i++) {
    quadrado[i] = [];
    for (let j = 0; j < 10; j++) {
        quadrado[i][j] = 0; 
    }
}

for (let i = 0; i < 10; i++) {
    quadrado[i][i] = 7; 
    quadrado[i][9 - i] = 7; 
}

console.table(quadrado);
