var agora = new Date();
var diaSem = agora.getDay();

console.log("Dias da semana:");
console.log("0 - Domingo");
console.log("1 - Segunda-feira");
console.log("2 - Terça-feira");
console.log("3 - Quarta-feira");
console.log("4 - Quinta-feira");
console.log("5 - Sexta-feira");
console.log("6 - Sábado");
console.log(`\nHoje é: ${diaSem}`);

switch (diaSem) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("[ERRO] Dia inválido");
}
