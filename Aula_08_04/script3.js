let idade = 17;
if (idade >= 18) {
    console.log("Você é maior de idade!!!")
} else {
    console.log("Você é menor de idade poxa...")
}


let nota = 6;

if (nota >= 7) {
    console.log("Aluno aprovado!!!");

} else {
    console.log("Aluno reprovado!!!")
}

let hora = 15;

if (hora < 12) {
    console.log("Greetings");

} else if (hora < 18) {
    console.log("Good afternoon my man");
} else {
    console.log("Good night!")
}

let idadeUsuário = 15;

if (idadeUsuário >= 0 && idadeUsuário <= 12) {
    console.log("Você é uma criança!");
} else if (idadeUsuário >= 13 && idadeUsuário <= 17) {
    console.log("Você é um adolescente!");
} else {
    console.log("Você é um adulto!");
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question('Por favor, digite a sua idade: ', (idade) => {
    const idadeNumero = parseInt(idade);

    if (!isNaN(idadeNumero)) {
        if (idadeNumero >= 18) {
            console.log("Você é maior de idade!")
        }
    } else {
        console.log("Por favor, digite um número válido para a idade.")
    }
    readline.close;
})