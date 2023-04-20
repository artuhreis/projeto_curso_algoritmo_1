//Descrição: O progama faz o cálculo de dois números, verifica se o usuário quer repitir ou não.

function acaoBotao(){

    var numero01, numero02, calculo, sairLoop;

do{
    numero01 = prompt("Digite o Primeiro Número para Somar: ");
    numero01 = parseInt(numero01);

    numero02 = prompt("Digite o Segundo Número para Somar: ");
    numero02 = parseInt(numero02);

    calculo = numero01 + numero02;

    alert (" O valor da soma é = " +calculo)
    
    sairLoop = prompt("Deseja Sair? S/N")} while (sairLoop == "n" || sairLoop == "N") ;


}