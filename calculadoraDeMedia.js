/*   escreva("Digite seu nome: ")
   leia(nome)
   escreva("Digite sua Primeira Nota: ")
   leia(nota1)
   escreva("Digite sua Segunda Nota: ")
   leia(nota2)
   
   mediaAprovado <- 70
   
   media <- (nota1 + nota2) / 2
   
   se (media < mediaAprovado) entao
      escreva(nome, " Sua Média é ", media, " você está REPROVADO!")
   
   senao
        escreva(nome, " Sua Média é ", media, " você está APROVADO!")
   
   fimse */

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


