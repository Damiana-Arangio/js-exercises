/* 
  TESTO:
    
  Il software deve chiedere per 5 volte all’utente di inserire un numero. 
  Il programma stampa la somma di tutti i numeri inseriti. 
  Esegui questo programma in due versioni, con il for e con il while (facoltativo)

*/

// Inizializzazione somma a 0
let somma = 0;

// Ciclo for
console.log("CICLO FOR");

for (let i = 0; i < 5; i++) {
  const num = parseInt(prompt("For - Inserisci il numero " + (i + 1) + ":"));
  somma = somma + num;
}

console.log ("La somma con il ciclo for è: ", somma);


// Ciclo while
console.log("CICLO WHILE");

// Inizializzazione
let sommaWhile = 0;
let j=0;

while (j<5) {
  const num = parseInt(prompt("While - Inserisci il numero " + (j + 1) + ":"));
  sommaWhile = sommaWhile + num;

  j++;
}

console.log("La somma con il while è: ", sommaWhile);
