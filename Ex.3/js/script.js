// Crea un array vuoto.
//   Chiedi per 6 volte all’utente di inserire un numero,
//   se è dispari inseriscilo nell’array.

// Inizializza un array vuoto per i Numeri
const numbers = [];

// Chiedi all'utente 6 numeri e salvali in un array
for (let i = 0; i < 6; i++) {
  const userNumber = parseInt(prompt("Inserisci un numero:"));

  // Verifica se il numero è dispari
  if (userNumber % 2 !== 0) {
    numbers.push(userNumber);
  }
}

alert(numbers);

