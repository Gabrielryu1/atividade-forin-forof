const ler = require('readline-sync');


let arrayOri = [];
let arrayMod = [];


for (let i = 0; i < 10; i++) {
    let numero;
    do {
        numero = ler.questionFloat(`Digite o elemento ${i + 1} (inteiro e positivo): `);
    } while (numero <= 0);
    arrayOri.push(numero);
}


for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        arrayMod.push(arrayOri[i] / 2);
    } else {
        arrayMod.push(arrayOri[i] * 3);
    }
}

console.log("Array Ori:", arrayOri);
console.log("Array Mod:", arrayMod);
