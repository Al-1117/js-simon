// CONSEGNA

// Un alert espone 5 numeri casuali.

// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire un prompt alla volta
// i numeri che ha visto precedentemente.

//  Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati

// ESECUZIONE DELL'ESERCIZIO


// Espongo i 5 numeri casuali all'utente in un array
// generandoli con l'apposita Funzione in modo che se volessi aumentare
//il range di numeri oppure la quantità, potre farlo facilmente.
//non include numeri doppi

var numeriGenerati = generaNumeriCasuali(10, 100);

var mostroNumeri = alert('Memorizza i seguenti numeri: ' + numeriGenerati);

console.log('array numeri casuali: ' + numeriGenerati);


// Faccio partire il conteggio e dopo i 30 secondi (settato a 3 secondi per debug) chiedo i numeri
setTimeout(function(){
  // Creo gli array che poi saranno automaticamente popolati

  var arrayNumeriCorretti = [];
  var contatore = 0;

// Chiedo all'utente di inserire il quantitativo di numeri numeri in base alla lunghezza settata prima dalla funzione generaNumeriCasuali
  for (var j = 0; j < numeriGenerati.length; j++) {
    // Chiedo all'utente di inserire i numeri precedentemente visti
    var numeroUtente = parseInt(prompt('Inserisci i numeri che hai visto prima'));

    // Se il numero corrisponde lo metto nell'array dei numeri corretti.
    if (numeriGenerati.includes(numeroUtente)) {
      arrayNumeriCorretti.push(numeroUtente);
      console.log('sono entrato nella if');
      contatore++;
    }

  }

  // Comunico all'utente i numeri indovinati e quali
  console.log('Hai indovinato ' + contatore + ' numeri. Questi sono i numero che hai indovinato ' + arrayNumeriCorretti);


}, 3000);
//
//  var arrayUtente = setTimeout(inserireNumeri, 3000);
//
//  console.log('array numeri utente: ' + arrayUtente);
//
//  // var confronto = confrontareArray(numeriGenerati, arrayUtente);
//
//  console.log(confronto);
// //
// // clearTimeout(inserireNumeri);
//

























// // Funzione per confrontare gli array
// function confrontareArray(array1, array2){
//
//   var numeriTrovati = [];
//
//   var w = 0;
//
//   while (w < array1.length) {
//
//     var lista1 = [];
//
//     for (var i = 0; i < array1.length; i++) {
//       lista1.push(array1[i]);
//     }
//
//     var lista2 = [];
//     for (var j = 0; j < array2.length; j++) {
//       lista2.push(array2[j])
//     }
//
//     if (lista1[i] == lista2[j] ) {
//       numeriTrovati.push(lista2[j]);
//     }
//
//     w++;
//   }
//
//
//
//
//   return numeriTrovati;
// }

//
//

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
  // Verifica se il numero è incluso o meno prima di aggiungerlo all'array in
  // in modo da non aggiungere numeri doppi
  if (!arrayNumeri.includes(numeroRandom)) {
    arrayNumeri.push(numeroRandom);

  }


  }
  return arrayNumeri;
}
