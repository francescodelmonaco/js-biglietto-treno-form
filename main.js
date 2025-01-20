// chiedi all'utente con promt:
// - numero km
// - età
// obiettivo calcolare prezzo totale del viaggio sapendo:
// - costo biglietto (0.21€/km)
// - sconto 20% < 18 anni (ricorda di usare .toFixed per gestire le cifre decimali)
// - sconto 40% >= 65 anni
// Il vostro viaggio di x km prevederà un costo totale di y.yy €

let userDistance = document.getElementById("distance");
let userAge = document.getElementById("age");
let btnGenera = document.getElementById("btn-cost");

btnGenera.addEventListener("click", () => {
    let distanceValue = parseInt(userDistance.value);
    let ageValue = parseInt(userAge.value);
    
    console.log(`Dovrai percorrere ${distanceValue} km.`);
    console.log(`Il passeggero ha ${ageValue} anni.`);
    
    const kmPrice = 0.21;
    let standardPrice = kmPrice * distanceValue;
    let underPrice = (standardPrice - (standardPrice * 20 / 100));
    let overPrice = (standardPrice - (standardPrice * 40 / 100));

    if (ageValue < 18) {
        console.log(`Il costo del viaggio è di ${underPrice.toFixed(2)}€.`)
    } else if (ageValue >= 65) {
        console.log(`Il costo del viaggio è di ${overPrice.toFixed(2)}€.`)
    } else {
        console.log(`Il costo del viaggio è di ${standardPrice.toFixed(2)}€.`)
    }
})
