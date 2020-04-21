//1-Com base no exemplo do link do slide 1 (o que é javascript), crie um arquivo com um button, que ao clicar exiba a mesnagem "Bem vindo ao Reprograma". OBS.: Utilize javascript externo

//2-Crie 3 variais, e exiba no concole o tipo de cada uma, utilizndo o typeof

//3-Crie um botao, que ao ser clicado, exiba:
//1 console.log()
//1 console.error()
//1 console.info()

//--1--
//capturando a tag button do html
//seletor     //nome da tag selecionada no html
let button = document.querySelector('button');

//add a função click
//função tipo click
button.addEventListener('click', clicarNoBotao);

//cria o alert/msg a ser exibido 
function clicarNoBotao() {
    alert('Bem vinda a Reprograma!')
}

//--2--
// const numero = 1;
// const nome = "meu";
// const ativo = true;

// console.log('nome', typeof(nome));
// console.log('número', typeof(numero));
// console.log('boolean', typeof(ativo));

//3
