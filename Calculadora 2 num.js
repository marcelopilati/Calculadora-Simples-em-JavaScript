import input from 'readline-sync';

console.log("Calculadora de dois numeros!!\n");

let numero_1 = input.question("Digite o primeiro numero: \n");
let numero_2 = input.question("Digite o segundo numero: \n");

console.log("Escolha uma opcao!!\n");

console.log("1 - Adicao! \n");
console.log("2 - Subtracao! \n");
console.log("3 - Multiplicacao! \n");
console.log("4 - Divisao! \n");
let operacao = input.question("Opcao Escolhida: \n");

let resultado;

if(operacao == 1 ){
    resultado = Number(numero_1) + Number(numero_2);
    console.log("O resultado da adicao e: " + resultado);    
}
else if(operacao == 2){
    resultado = numero_1 - numero_2;
    console.log("O resultado da subtracao e: " + resultado);
}
else if(operacao == 3){
    resultado = numero_1 * numero_2;
    console.log("O resultado da multiplicacao e: " + resultado);
}
else if(operacao == 4){
    resultado = numero_1 / numero_2;
    console.log("O resultado da divisao e: " + resultado);
}
else{
    console.log("Operacao Invalida!!");
}
