function acaoBotao(){
    var numero01, numero02, operacao, resultado;
    
    numero01 = prompt("Digite o primeiro Número: ");
    numero01 = parseInt(numero01);
    
    operacao = prompt("Digite a operação Ex: + , - , * , /");
    
    numero02 = prompt("Digite o segundo Número: ");
    numero02 = parseInt(numero02);
    
    switch(operacao){
        case "+" : resultado = numero01 + numero02;
        break;

        case "-" : resultado = numero01 - numero02;
        break;

        case "*" : resultado = numero01 * numero02;
        break;

        case "/" : resultado = numero01 / numero02;
        break;
    } 
    document.getElementById("paragrafo").innerText = "O Resultado é = " + resultado;
    }