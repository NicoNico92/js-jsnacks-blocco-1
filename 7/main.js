//inserisco una var iniziale uguale a 0,  poi una var p che risponde a una funzione con base 2 e un esponente che cresce ogni  volta che entra in un ciclo while, così da restituire una potenza sempre maggiore di 2.
var i = 0;
var p = Math.pow(2,i);
while (p < 1000) {
    i++;
    //Inserisco il consolo.log prima della fine dell'ultimo ciclo in modo che non compaia la potenza di 2 1024 che è superiore di 1000
    console.log(p);
    p = Math.pow(2,i);
}
