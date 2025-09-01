/* 
  TESTO:
    
  Crea un array vuoto. 
  Chiedi per 6 volte all’utente di inserire un numero, 
  se è dispari inseriscilo nell’array

*/

// Creazione Array Vuoto
const dispari = [];

for (let i = 0 ; i < 6 ; i++ ) {
  const num = parseInt ( prompt("Inserisci il numero: " + (i+1) ) );

  if (num % 2 !== 0) {
    dispari.push(num);
  }
}

console.log(dispari);