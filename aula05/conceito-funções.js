// FUNÇÕES EM JAVASCRIPT   
// O que é uma função?  
 // Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica.   
// Analogia SIMPLES!   
 // Você vai colocar valores (parâmetros)  
  // Ela processa  
 // Devolve um resultado (return)   


 
//-------------------------------
// Estrutura básica de uma função
//-------------------------------

//function nomeDaFuncao(parametro1, parametro2){
    //código que será executado
//return resultado;
//}

// function ---> palavra-chave
// nomeDaFuncao ---> nome da função
// parâmetros ---> valores que a função recebe
// return ---> valor que a função devolve

// 5 emplos 

// 1- somar 2numeros

function somar (a, b) {
    return a + b;
}

console.log(somar(2,15))

// 2 - Converter real para dólar
function realParaDolar(valorReal, cotacao){
    return valorReal * cotacao;
}

console.log (realParaDolar (10,5.20).toFixed (2))

//4  - AUMENTO DE SALARIO 
function calcularAumento (SALARIO){
    return SALARIO + (SALARIO * 0.25)
}

console.log (calcularAumento(2000))

// veriifique se É par ou impar?
// Verifique se é par ou impar?
function verificaImparOuPar(valor){
    if (valor % 2 === 0){
        return("seu numero é par")
    }
    else{
        return("seu numero é impar")
    }
}
console.log(verificaImparOuPar(3))