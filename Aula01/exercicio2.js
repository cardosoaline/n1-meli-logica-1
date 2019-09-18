/*
Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.


Inicio 
      
       numero1 = x;

       numero2 = y;

       se (numero1 > numero2){

           Escreva x é maior y;
       }se nao {

             y é maior;
       }


Fim 


*/

let numero1 = prompt ("Digite um numero")

let numero2 = prompt ("Digite outro numero ")

if (numero1 >numero2)
{
    document.write("numero : "+numero1+"é maior que "+numero2)
}
else if(numero1 == numero2)
{
    document.write("Estes numeros são iguais!")
}
else{
    document.write("numero : "+numero2+"é maior que "+numero1)
}