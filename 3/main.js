//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

//somma iniziale = 0
var somma=0;

//SOLUZIONE ciclo for OSCURATA
//chiedo 5 volte il numero e ad ogni ciclo lo aggiungo alla somma
// for (var i=0; i < 5; i++) {
//     var numero = parseInt(prompt('Inserisci un numero'));
// somma = somma + numero;}

//imposto una var i iniziale uguale a 0 che aumenterà di uno ad ogni ciclo, fino a diventare 5 e quindi interrompendolo. Chiedo così 5 volte il numero e a ogni ciclo lo aggiungo alla somma
var i=0;
while (i < 5) {
    var numero = parseInt(prompt('Inserisci un numero'));
    somma = somma + numero;
    i++;
}

//visualizzo somma finale a schermo
console.log(somma);
