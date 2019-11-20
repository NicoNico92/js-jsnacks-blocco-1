//CONSEGNA: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

//chiedo all'utente di inserire 2 numeri e li stampo a console
var number1 = parseInt(prompt('inserisci un numero'));
console.log(number1);
var number2 = parseInt(prompt('inserisci un altro numero'));
console.log(number2);

// con la funzione math individuo immediatamente il numero maggiore e lo stampo a console
//var a = Math.max(number1, number2);
//console.log(a);

//confronto inizialmente i due numeri per individuare se sono uguali, dopodichè se non sono uguali li inserisco in una lista e la ordino in modo decrescente in modo da poter stampare poi a console l'elemento 0 della lista
if (number1 == number2) {
console.log('I due numeri sono uguali');
} else {
var lista = [number1, number2];
console.log(lista);
lista.sort(function(a,b){return b-a});
console.log(lista);
console.log('Il numero maggiore è ' + lista[0]);
}
