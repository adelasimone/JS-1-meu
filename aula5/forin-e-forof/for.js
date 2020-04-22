// 1. Faca um loop que mostre 15 vezes uma mensagem ("Ola Reprograma")
// let rep = ("Ola Reprograma")
// for(let i=0; i<=14; i++){
//     console.log(rep);
// }

// 2. Criem array de string, percorram (for of) exibindo cada texto do array.
// let nomes = ["Adela", "Ney", "Mila"];

// for(x of nomes) {
//     console.log(x);
// }

// 3. Criem um array de objetos e percorra (for of) mostrando apenas uma propriedade.
// [
// {nome: "",
// idade:0
// },
// {nome: "",
// idade: 1
// }
// ]
// x console.log(x.propriedade);
// let obj = [
//     {
//         nome: 'Fulana',
//         idade: 20
//     },
//     {
//         nome: 'Siclana',
//         idade: 28
//     },
//     {
//         nome: 'Abcd',
//         idade: 25
//     }
// ]
// for(x of obj) {
//     console.log(x.nome)
// }

// 4. Um loop que leia (prompt) o nome de 5 pessoas.
// let listaDeNomes = []
// for (let i = 0; i < 5; i++) {
//     let nomes = prompt('Digite um nome');
//     //ou
//     //listaDeNomes.push(prumpt('Digite um nome')) //pega o nome q a pessoa vai escrever e add no array  
//     listaDeNomes.push(nomes); //essa apagaria
//     console.log(listaDeNomes);
// }

//5. Faça um programa que receba 10 números, 
//calcule e imprima a soma dos números pares e a soma dos números ímpares.
// - for para ler 10 prompt 

// let numero = 0, somaImpares = 0, somaPares = 0,  contPar = 0, contImpar = 0;

// for (let num = 1; num <= 10; num++) {
//     numero = parseInt(prompt(`Digite o número ${num} :`));

//     if (numero % 2 === 0) {
//         contPar++;
//         somaPares += numero; //soma de numeros pares
//     }
//     else {
//         contImpar++; 
//         somaImpares += numero;
//     }
// }

// console.log(somaImpares, 'soma de numero impares');
// console.log(somaPares, 'soma de numeros pares');
// console.log(contPar, 'total de pares');
// console.log(contImpar, 'total de impares');

// 6. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// total de homens;
// total de mulheres;
// média das idades dos homens;
// média dos pesos das mulheres.
let idade = '', peso = '', sexo = '', somaFem = 0, somaMasc = 0, pesoTotalFem = 0, idadeTotalMasc = 0, mediaIdadeMasc = 0, mediaPesoFem = 0;


for (let i = 0; i < 2; i++) {
    idade = parseInt(prompt('Digite a idade:'));
    peso = parseInt(prompt('Digite o peso:'));
    sexo = prompt('Digite o sexo:');

    if (sexo == 'f') {
        somaFem++;
        pesoTotalFem += peso;
        mediaPesoFem = pesoTotalFem / somaFem;
    } else {
        somaMasc++;
        idadeTotalMasc += idade;
        mediaIdadeMasc = idadeTotalMasc / somaMasc;
    }
}

console.log('Total de homens:', +somaMasc);
console.log('total de mulheres:', +somaFem);
console.log('A média do peso entre as mulheres é', +mediaPesoFem);
console.log('A média da idade entre os homens é', +mediaIdadeMasc)

// - For ate 10 => 3 prompts ( idade, peso, sexo);
// - contar qtd mulheres
// - qtd homens
// - soma antes
// - media da idade das homens (soma das idades)
// - media dos pesos das mulheres (soma dos pesos)

// media = soma / qtd 