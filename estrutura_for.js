//Descrição: Esse programa faz o cálculo do fatorial de um número

function acaoBotao(){

    var numero, fatorial;

numero = prompt("Digite o  Número para descobri seu Fatorial: ");
numero = parseInt(numero);

fatorial = 1;

for(var contador = 1; contador <= numero; contador ++ ){

    fatorial = fatorial * contador ;
}

document.getElementById("paragrafo").innerText = "O Fatorial de " + numero + " é "  + fatorial;
}