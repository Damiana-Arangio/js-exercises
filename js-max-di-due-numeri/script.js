/* 
  TESTO:
    
  L’utente inserisce due numeri in successione, con due prompt. 
  Il software stampa il maggiore

*/

// Definizione Variabile
let max;

// Input da tastiera
const num1 = Number(prompt("Inserisci il primo numero: "));
const num2 = Number(prompt("Inserisci il secondo numero: "));

if (num1 === num2) {
  console.log("I due numeri sono uguali");
}

else {
  if (num1 > num2) {
    max = num1;
  }

  else {
    max = num2;
  }

  console.log("Il maggiore tra " + num1 + " e " + num2 + " è " + max);
}