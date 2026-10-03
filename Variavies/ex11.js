let valor = Number(prompt("Digite o valor da compra:"));

let pagamento = Number(prompt(
    "Escolha a forma de pagamento:\n" +
    "1 - Pix\n" +
    "2 - Dinheiro\n" +
    "3 - Cartão"
));

let valorFinal;

if (pagamento == 1) {
    valorFinal = valor - (valor * 0.14);
    alert("Valor final no Pix: R$ " + valorFinal.toFixed(2));
} else if (pagamento == 2) {
    valorFinal = valor - (valor * 0.07);
    alert("Valor final em dinheiro: R$ " + valorFinal.toFixed(2));
} else if (pagamento == 3) {
    valorFinal = valor;
    alert("Valor final no cartão: R$ " + valorFinal.toFixed(2));
} else {
    alert("Forma de pagamento inválida.");
}