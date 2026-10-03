let valor = Number(prompt("Digite o valor da compra:"));

if (valor > 100) {
    let desconto = valor * 0.10;
    let valorFinal = valor - desconto;

    alert("Valor final: R$ " + valorFinal);
} else {
    alert("Valor final: R$ " + valor);
}