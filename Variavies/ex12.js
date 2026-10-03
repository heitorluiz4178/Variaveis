let hora = Number(prompt("Digite uma hora entre 0 e 23:"));

if (hora >= 6 && hora <= 11) {
    alert("Bom dia");
} else if (hora >= 12 && hora <= 18) {
    alert("Boa tarde");
} else if (hora >= 19 && hora <= 23) {
    alert("Boa noite");
} else if (hora >= 0 && hora <= 5) {
    alert("Boa madrugada");
} else {
    alert("Hora inválida.");
}