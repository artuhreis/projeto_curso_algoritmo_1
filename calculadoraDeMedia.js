//Descrição: Cálcula se o Aluno foi aprovado ou não

   function acaoBotao(){
   var nome, nota1, nota2, media, mediaAprovado;
    
   mediaAprovado = 70;
    
    nome = prompt("Digite seu nome: ");

    nota1 = prompt("Digite sua Primeira Nota: ");
    nota1 = parseFloat(nota1)
    nota2 = prompt("Digite sua Segunda Nota: ");
    nota2 = parseFloat(nota2)

    media = (nota1 + nota2) / 2;

    if(media > mediaAprovado)
        document.getElementById("paragrafo").innerText = nome + " sua Média é "+ media + " você está Aprovado!";
    
     else document.getElementById("paragrafo").innerText = nome + " sua Média é "+ media + " você está Reprovado!";

   } 


