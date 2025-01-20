// chiedi all'utente con promt:
// - numero km
// - età
// obiettivo calcolare prezzo totale del viaggio sapendo:
// - costo biglietto (0.21€/km)
// - sconto 20% < 18 anni (ricorda di usare .toFixed per gestire le cifre decimali)
// - sconto 40% >= 65 anni
// Il vostro viaggio di x km prevederà un costo totale di y.yy €

// FASE DI PREPARAZIONE
let distance = parseInt( prompt("Quanti km dovrai percorrere?", "Scrivi il numero di km da percorrere...") );
let age = parseInt( prompt("Quanti anni ha il passeggero?", "Scrivi la tua età...") );

console.log(`Dovrai percorrere ${(distance)} km.`);
console.log(`Il passeggero ha ${(age)} anni.`);

const kmPrice = 0.21;

// FASE DI ELABORAZIONE
let standardPrice = kmPrice * distance;
let underPrice = (standardPrice - (standardPrice * 20 / 100));
let overPrice = (standardPrice - (standardPrice * 40 / 100));

// FASE DI OUTPUT
if (age < 18) {
    console.log(`Il costo del viaggio è di ${underPrice.toFixed(2)}€.`)
} else if (age >= 65) {
    console.log(`Il costo del viaggio è di ${overPrice.toFixed(2)}€.`)
} else {
    console.log(`Il costo del viaggio è di ${standardPrice.toFixed(2)}€.`)
}