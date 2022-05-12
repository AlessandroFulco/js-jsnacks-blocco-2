// genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni;

//array di partenza vuoto
const myArray = [];

while (myArray.length < 10) {
    let randomNumGenerator = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumGenerator);

    let presente = myArray.includes(randomNumGenerator);
    if (!presente) {
        myArray.push(randomNumGenerator);
    }
}

const lista = document.getElementById('array');

lista.innerHTML =`il contenuto dell'array è: ${myArray.join(' ')}`;