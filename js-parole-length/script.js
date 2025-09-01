/* 
  TESTO:
    
  L’utente inserisce due parole in successione, con due prompt. 
 Il software stampa prima la parola più corta, poi la parola più lunga.

*/

// Input da tastiera
const parola1 = (prompt("Inserisci la prima parola: "));
const parola2 = (prompt("Inserisci la seconda parola: "));

if (parola1.length === parola2.length) {
  console.log("Le due parole hanno la stessa lunghezza");
}

else {
  
  if (parola1.length < parola2.length) {
    console.log(parola1, parola2)
  }

  else {
    console.log(parola2, parola1)
  }

}