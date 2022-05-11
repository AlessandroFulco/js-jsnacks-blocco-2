// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.


let arrayNumeriUtente = [];
let sommaNumeriUtente = 0;


    
do {
    // definizione input utente 
    let numeroUtente = parseInt(prompt('inserisci numer: '));

    // inserisco il numero dentro l'array
    arrayNumeriUtente.push(numeroUtente);

    // somma di ogni numero dell'utente che inserisce
    sommaNumeriUtente += numeroUtente;
    
    
} while (sommaNumeriUtente < 50);

console.log(sommaNumeriUtente);

