
const carrinho = {
    "Frutas": [
        { nome: "kiwi", preco: 7.00, quantidade: 5 },
        { nome: "tomate", preco: 1.50, quantidade: 6 }
    ],
    "Laticínios": [
        { nome: "iorgute", preco: 4.00, quantidade: 2 },
        { nome: "Queijo", preco: 10.00, quantidade: 1 }
    ],
    "Limpeza": [
        { nome: "agua sanitaria", preco: 3.00, quantidade: 3 },
        { nome: " Pó", preco: 8.00, quantidade: 1 }
    ]
};


let totalGeral = 0;

for (const categoria in carrinho) {
    let totalCate = 0;

   
    for (const produto of carrinho[categoria]) {
        const totalProduto = produto.preco * produto.quantidade;
        totalCate += totalProduto;
    }

    console.log(`Total da categoria ${categoria}: R$${totalCate.toFixed(2)}`);
    totalGeral += totalCate;
}

console.log(`Total geral: R$${totalGeral.toFixed(2)}`);
