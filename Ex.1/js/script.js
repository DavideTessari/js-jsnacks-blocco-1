// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

// Chiedi all'utente 5 numeri e salvali in un array
let numbers = [];

for (let i = 0; i < 5; i++) {
  const userNumber = parseInt(prompt("Inserisci un numero:"));

  // Inserire i numeri nell'array ma senza creare duplicati
  if (!numbers.includes(userNumber)) {
    numbers.push(userNumber);
  }
}

alert(numbers);