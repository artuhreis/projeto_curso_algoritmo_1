function acaoBotao(){

    var nome, idade, contador, limite;

limite = prompt("Digite o  Número de vezes que você quer verificar a idade: ");

contador = 0;

while(contador < limite ){

    nome = prompt("Digite o seu nome: ");
    
    idade = prompt(nome + " digite sua idade: ")

    if(idade > 18) 
    document.getElementById("paragrafo").innerText = nome + " você é maior de idade " ;
        
    else 
    document.getElementById("paragrafo").innerText = nome + " você é menor de idade " ;
    
    contador ++;

}


}