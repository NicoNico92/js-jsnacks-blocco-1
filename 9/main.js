

//inserisco una var somma iniziale =0, che una volta entrata nel ciclo crescerà, aumentando la somma ad ogni giro
var somma = 0;
for (var i = 1; i < 11; i++) {
    somma = (somma) + i;
}
//calcolo la media a partire dalla  somma fatta
var media = somma / 10;
console.log('la somma è ' + somma);
console.log('la media è ' + media);


// //SOLUZIONE INDIVIDUATA SU STACK OVERFLOW
// var i;
// var elmt = new Array();
// for (var i = 1; i < 11; i++) {
//     elmt.push(i);
// }
// var sum = 0;
// for( var i = 0; i < elmt.length; i++ ){
//     sum += parseInt( elmt[i], 10 ); //don't forget to add the base
// }
// var avg = sum/elmt.length;
// document.write( "The sum of all the elements is: " + sum + " The average is: " + avg );
