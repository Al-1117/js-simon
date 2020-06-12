// CONSEGNA

// Un alert espone 5 numeri casuali.

// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire un prompt alla volta
// i numeri che ha visto precedentemente.

//  Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati

// ESECUZIONE DELL'ESERCIZIO


// Espongo i 5 numeri casuali all'utente in un array
var numeriGenerati = generaNumeriCasuali(5, 100);

var mostroNumeri = alert('Memorizza i seguenti numeri: ' + numeriGenerati);

console.log('array numeri casuali: ' + numeriGenerati);

// Faccio partire il conteggio e dopo i 30 secondi chiedo i numeri

 var arrayUtente = inserireNumeri();

 console.log('array numeri utente: ' + arrayUtente);

 var confronto = confrontareArray(numeriGenerati, arrayUtente);

 console.log(confronto);
//
// clearTimeout(inserireNumeri);

// setTimeout(console.log(arrayUtente), 4000);


// Dopo che l'utente ha inserito i numeri, gli comunico quanti e quali numeri ha inserito
function confrontareArray(array1, array2){

  var numeriTrovati = [];

  var w = 0;

  while (w < array1.length) {

    var lista1 = [];

    for (var i = 0; i < array1.length; i++) {
      lista1.push(array1[i]);
    }

    var lista2 = [];
    for (var j = 0; j < array2.length; j++) {
      lista2.push(array2[j])
    }

    if (lista1[i] == lista2[j] ) {
      numeriTrovati.push(lista2[j]);
    }

    w++;
  }




  return numeriTrovati;
}




// Funzione inserimento numeri utente
function inserireNumeri(){
  var numeriInseriti = [];
  for (var i = 0; i < 5; i++) {
  var numeroUtente = parseInt(prompt('Inserisci i numeri che hai visto prima'));
    numeriInseriti.push(numeroUtente);
  }
    return numeriInseriti;
}




//  Funzione genera numeri random in un array
function generaNumeriCasuali(quantitaNumeri, limiteMassimo){
  var arrayNumeri = [];
  for (var i = 0; i < quantitaNumeri; i++) {
  var numeroRandom =  Math.floor(Math.random() * limiteMassimo) + 1;
    arrayNumeri.push(numeroRandom);
  }
  return arrayNumeri;
}
