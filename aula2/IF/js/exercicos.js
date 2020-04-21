// 1. leia um numero e verifique se ele é par ou ímpar utilizando MOD  (% 2 === 0).
// - leia um numero: prompt
// - armazeno o numero numa variavel
// - fazer condicao para verificar se é par (if)
// - fazer condicao para verificar se é impar (else)

// const numUsuario = prompt('Digite um número:');

// if (numUsuario % 2 === 0) {
//     alert('Esse número é par!')
// } else {
//     alert('Esse número é ímpar!')
// }


// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

// - ler primeira nota (salvando)
// - ler segunda nota (salvando)
// - calcular a média: (soma todos os valores/2)
// - condicao 1 : média >= 7 'Aprovado'
// - condicao 2 : média <7 'Reprovado'
// - condicao 3 : média =10 'Aprovado com Distincao'

// let nota1 = parseFloat(prompt('Digite a primeira nota:'));
// let nota2 = parseFloat(prompt('Digite a segunda nota:'));

// let media = (nota1 + nota2) / 2

// if (media === 10) {
//     alert('Aprovado com Distinção');
// } else if (media >= 7) {
//     alert('Aprovado');
// } else if (media < 7) {
//     alert('Reprovado');
// } else {
//     alert('Valor inválido')
// }


//3. Faça um script que leia três números inteiros e mostre o maior deles.

// let numero1 = parseInt(prompt('Digite um número:'));
// let numero2 = parseInt(prompt('Digite um número:'));
// let numero3 = parseInt(prompt('Digite um número:'));

// if (numero1 == numero2 && numero1 == numero3 && numero2 == numero3) {
//     alert(`Os números são iguais`);
// }

// if (numero1 > numero2 && numero1 > numero3) {
//     alert(`Número 1 é maior`);
// } else if (numero2 > numero1 && numero2 > numero3) {
//     alert(`Número 2 é maior`);
// } else {
//     alert('Número 3 é maior');
// }

//ou

// else if (numero3 > numero1 && numero3> numero2) pra não executar oalert do if"números iguais" com o alert do numero 3 é maior


// 4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
// Fazer duas variáveis trocarem de valores entre si - Variável Auxiliar

// let x = prompt('Digite um valor');
// let y = prompt('Digite outro valor');
// let backup = 0;

// alert(`A ordem é ${x} e ${y}`);

// backup = x; //salvando valor inicial do 'x' no 'backup'
// x = y; //'x' agr tem o valor de 'y'
// y = backup; //pega o valor do backup q era x

// alert(`Agora a ordem é ${x} e ${y}`);