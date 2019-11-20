//CONSEGNA: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

//creo un array inizialmente vuoto che si arricchirà di numeri se nei 5 digitati dall'utente ce ne saranno di dispari
var lista = [];

 for (var i = 0; i < 6; i++) {
     var numeroutente = parseInt(prompt('inserisci un numero'));
     if (numeroutente % 2== 0) {
        console.log('il numero è pari');
     } else if (numeroutente % 2 == 1) {
         console.log('il numero è dispari');
         lista.push(numeroutente);
     } else {
        console.log('non hai inserito un numero valido');
    }
 }

console.log(lista);
