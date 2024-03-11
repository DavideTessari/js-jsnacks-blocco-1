// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Chiedi all'utente 5 numeri e salvali in un array
let sum = 0;
for (let i = 0; i < 5; i++) {
  const userNumber = parseInt(prompt("Inserisci un numero:"));

  // Stampa la somma di tutti i numeri
  sum += userNumber;
}

alert(sum)