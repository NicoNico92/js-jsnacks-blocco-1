//COSEGNA Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// faccio inserire un numero di 4 cifre senza parseInt per sfruttare il fatto che compare sotto forma di stringa e quindi trasformo i singoli numeri che lo compongono in numero solo quando entrato nell'espressione della somma
var numero = prompt('Inserisci un numero di 4 cifre');
console.log(numero);
    var somma = 0;
    for (var i = 0; i < numero.length; i++) {
        somma = (somma) + parseInt(numero[i]);
    }
    console.log('la somma è ' + somma);

// SOLUZIONE INDIVIDUATA SU STACK OVERFLOW
//     var value = parseInt(prompt('inserisci un numero a 4 cifre')),
//     sum = 0;
// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }
// console.log(sum);
