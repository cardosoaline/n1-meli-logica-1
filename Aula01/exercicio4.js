
/*
Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.


Inicio

Digite um numero:
numero = x;

Se (x % 2 for igua a 0){
    
    mostre (é par!)

}se nao {

    mostre (é impar)
}
 
Fim 
*/

let numero = prompt("Digite um numero:")

if(numero % 2 == 0){

    document.write(numero +" é par!")
} else{
    document.write(numero +" è impar")
}