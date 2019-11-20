
//creo una lista array di nomi ammessi
var lista = ['pippo','pluto','paperino'];

//faccio inserire un nome all'utente
var nomeutente = prompt("Insert your name please:");
console.log('hai inserito: ' + nomeutente);

//imposto un var utenteinvitato 0 o false
 var utenteinvitato = 0;

//faccio entrare il nome inserito dall'utente in un ciclo: se incluso nell'array la var nomeutente cambierà in uno o true
 for (var i = 0; i < lista.length; i++) {
    if (nomeutente == lista[i])
      { utenteinvitato = 1;
   }
 }

//faccio comparire un messaggio a console in base al valore della car utenteinvitato
 if (utenteinvitato == 1) {
    console.log('Sei benvenuto');
 } else {
  console.log('Non sei invitato');
}
