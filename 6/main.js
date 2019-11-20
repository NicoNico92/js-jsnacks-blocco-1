var lista = [];

 var numeroutente = prompt('inserisci un numero da 1 a 9')

 for (var i = 1; i <= numeroutente; i++) {
     var cubo = Math.pow(i, 3);
     console.log(cubo);
     lista.push(cubo);
 }

 console.log(lista);
