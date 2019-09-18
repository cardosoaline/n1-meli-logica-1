/*
Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10


Inicio 

Digite um numero:
numero = x;



Se (numero % 10 for igua a 0){
    
    mostre (é multiplo!)

}se nao {

    mostre (não é multiplo)
}
 
Fim 


*/

let numero = prompt("Digite um numero")

if (numero % 10 == 0){

    document.write("è multiplo de 10")
}else{
    document.write("Não é multiplo de 10")
}