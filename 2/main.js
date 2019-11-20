
//chiedo all'utente di inserire sue parole e confronto in seguito la loro lunghezza per individuare la più lunga
var parola1 = prompt('Inserisci una parola');
console.log(parola1);
var parola2 = prompt("Inserisci un'altra parola");
console.log(parola2);
if (parola1.length == parola2.length) {
    console.log('Le due parole hanno la stessa lunghezza');
} else if (parola1.length > parola2.length){
    console.log('La parola ' + parola1 + ' è la più lunga')
} else {
    console.log('La parola ' + parola2 + ' è la più lunga')
}
