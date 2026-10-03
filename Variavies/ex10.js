let peso = Number(prompt("Digite seu peso em kg:"));
let altura = Number(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert("Abaixo do peso. IMC: " + imc.toFixed(2));
} else if (imc < 25) {
    alert("Peso ideal. IMC: " + imc.toFixed(2));
} else {
    alert("Acima do peso. IMC: " + imc.toFixed(2));
}