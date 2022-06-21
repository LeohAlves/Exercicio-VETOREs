/*
1.	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor, e mostre a quantidade de números pares e ímpares deste vetor.
*/

var numeros = new Array ();

numeros[0] = parseInt (prompt("Digite um número inteiro: ", ""))
numeros[1] = parseInt (prompt("Digite o segundo número inteiro: ", ""))
numeros[2] = parseInt (prompt("Digite o terceiro número inteiro: ", ""))
numeros[3] = parseInt (prompt("Digite o quarto número inteiro: ", ""))
numeros[4] = parseInt (prompt("Digite o quinto número inteiro: ", ""))

var qttpares = 0;
var qttimpares = 0; 

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        qttpares++;
    } else{
        qttimpares++
    }
}
console.log("A quantidade de impares é: " + qttimpares + " e a quantidade de pares é: " + qttpares); 

/*2.	Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3
primeiros elementos deste vetor.*/

var numeros = new Array ();

numeros[0] = parseInt (prompt("Digite um número inteiro: ", ""));
numeros[1] = parseInt (prompt("Digite o segundo número inteiro: ", ""));
numeros[2] = parseInt (prompt("Digite o terceiro número inteiro: ", ""));
numeros[3] = parseInt (prompt("Digite o quarto número inteiro: ", ""));
numeros[4] = parseInt (prompt("Digite o quinto número inteiro: ", ""));
numeros[5] = parseInt (prompt("Digite o sexto número inteiro: ", ""));

var somaTresPrimeirosElementos = numeros[0] + numeros[1] + numeros[2];

console.log("Soma dos três primeiros elementos: " + somaTresPrimeirosElementos);

/*3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.*/

var numeros = new Array ();

numeros[0] = parseInt (prompt("Digite um número inteiro: ", ""));
numeros[1] = parseInt (prompt("Digite o segundo número inteiro: ", ""));
numeros[2] = parseInt (prompt("Digite o terceiro número inteiro: ", ""));
numeros[3] = parseInt (prompt("Digite o quarto número inteiro: ", ""));
numeros[4] = parseInt (prompt("Digite o quinto número inteiro: ", ""));

var multiplicados=new Array() 
multiplicados[0] = numeros[0] * 2;
multiplicados[1] = numeros[1] * 2;
multiplicados[2] = numeros[2] * 2;
multiplicados[3] = numeros[3] * 2;
multiplicados[4] = numeros[4] * 2;

console.log("valor original: " + numeros + " valor multliplicados por 2: " + multiplicados );

/*4.	Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número.*/

var numeros = new Array ();

numeros[0] = parseInt (prompt("Digite um número inteiro: ", ""));
numeros[1] = parseInt (prompt("Digite o segundo número inteiro: ", ""));
numeros[2] = parseInt (prompt("Digite o terceiro número inteiro: ", ""));
numeros[3] = parseInt (prompt("Digite o quarto número inteiro: ", ""));
numeros[4] = parseInt (prompt("Digite o quinto número inteiro: ", ""));

var maior = 0

for(let i = 0; i < numeros.length; i++)
{
    if(numeros[i] > maior ){
        maior = numeros[i];
    }
}

console.log("O maior numero  é: " + maior)