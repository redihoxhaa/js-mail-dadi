'use strict'

const userNumber = Math.floor((Math.random() * 6) + 1);
const cpuNumber = Math.floor((Math.random() * 6) + 1);
console.log("Il numero dell'utente è " + userNumber);
console.log("Il numero della CPU è " + cpuNumber);

if (userNumber > cpuNumber) {
    console.log("Ha vinto l'utente!");
} else if (cpuNumber > userNumber) {
    console.log("Ha vinto la CPU!");
} else {
    console.log("Partita finita in parità!");
}



// Togli il commento qui sotto e alla fine per sbloccare l'esercizio bonus, e commenta quello superiore.

/*

// In questo programma, viene chiesto all'utente quante partite vuole fare, 
// e i punteggi vengono accumulati in due variabili che verranno confrontate alla fine delle partite.
// Vengono implementati dei controlli sull'input

const playsCounter = prompt("Inserisci il numero delle giocate che vuoi fare")
let userTotal = 0;
let cpuTotal = 0;

if (playsCounter > 0) {

    for (let cycleNumber = 0; cycleNumber < playsCounter; cycleNumber++) {
        const userNumber = Math.floor((Math.random() * 6) + 1);
        const cpuNumber = Math.floor((Math.random() * 6) + 1);
        userTotal += userNumber;
        cpuTotal += cpuNumber;
    }

    console.log("Il totale del giocatore è " + userTotal);
    console.log("Il totale della CPU è " + cpuTotal);

    if (userTotal > cpuTotal) {
        console.log("Ha vinto l'utente!");
    } else if (cpuTotal > userTotal) {
        console.log("Ha vinto la CPU!");
    } else {
        console.log("Partita finita in parità!");
    }
} else if (playsCounter < 0) {
    console.log("Non puoi fare giocate negative scemo!")
} else if (typeof (playsCounter) === "string") {
    console.log("Ti supplico scrivi il numero in cifre...")
}

*/
