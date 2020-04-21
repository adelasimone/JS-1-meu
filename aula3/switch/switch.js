//SWITCH
//1. Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta. Após, crie uma estrutura condicional switch que receba esta variável e que possua três casos: caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default, que retornará uma mensagem de erro no console.
// const fruta = prompt('Digite o nome da fruta:');
// switch (fruta) {
//     case 'maçã': 
//         alert('Não vendemos esta fruta aqui')
//     break;
//     case 'kiwi': 
//         alert('Estamos com escassez de kiwis')
//     break;
//     case 'melancia': 
//         alert('Aqui está, são 3 reais o quilo')
//     break;
//     default:
//         alert('Erro')
// }
// console.log(fruta)


// 2. Digite o mês. Caso seja = 1: Janeiro, caso seja 2 = Fevereiro ...
// const numeroMes = parseInt(prompt('Digite um número'));
// let mes;
// switch (numeroMes) {
//     case 1:
//         mes = 'Janeiro';
//         break;
//     case 2:
//         mes = 'Fevereiro';
//         break;
//     case 3:
//         mes = 'Março';
//         break;
//     case 4:
//         mes = 'Abril';
//         break;
//     case 5:
//         mes = 'Maio';
//         break;
//     case 6:
//         mes = 'Junho';
//         break;
//     case 7:
//         mes = 'Julho';
//         break;
//     case 8:
//         mes = 'Agosto';
//         break;
//     case 9:
//         mes = 'Setembro';
//         break;
//     case 10:
//         mes = 'Outubro';
//         break;
//     case 11:
//         mes = 'Novembro';
//         break;
//     case 12:
//         mes = 'Dezembro';
//         break;
//     default:
//         mes = 'Mês inválido';
// }

// alert(mes);


//3. Calcule o valor do salario do dev conforme valores abaixos.
// salario Base: R$ 2.500,00
// salario Junior = salario base + 20%
// salario Pleno = salario base + 35%
// salario senior = salario base + 50% 

let salarioFinal = "";
let cargo = prompt('Digite o cargo d* dev:');

let salarioBase = 2.500;

switch (cargo) {
    case 'junior':
       salarioFinal = (salarioBase*0.20) + salarioBase;  //ou salarioBase * 1.20
        break;
    case 'pleno':
       salarioFinal = (salarioBase*0.35) + salarioBas;  //ou salarioBase * 1.35
        break;
    case 'senior':
       salarioFinal = (salarioBase*0.50) + salarioBase;  //ou salarioBase * 1.50
        break;
    default:
        alert('Erro');
}

alert(salarioFinal.toFixed(3)); //.toFixed(3) mostra 3 casas decimais