// Calcola la somma e la media dei primi 10 numeri.

// Creo un array vuoto.
let numbers = [];

let sum = 0;
for (let i = 0; i < 10; i++) {
    // Li metto nell'array
    numbers.push(i);
    // Calcola la somma
    sum += i;
}

// Calcola la media dei primi 10 numeri.
let average = sum / numbers.length;

alert("La somma dei primi 10 numeri: " + sum);
alert("La media dei primi 10 numeri: " + average);

