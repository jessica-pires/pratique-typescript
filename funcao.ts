// Função de multiplicação que recebe dois números e retorna o resultado da multiplicação
function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}

const resultadoMultiplicacao: number = multiplicacao(5, 3);
console.log(resultadoMultiplicacao);

function saudacao(nome: string): string {
    return `Olá ${nome}`
}


const mensagemSaudacao: string = saudacao("Maria");

console.log(mensagemSaudacao); 
