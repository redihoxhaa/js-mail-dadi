const userNumber = Math.floor(Math.random() * 50);
const cpuNumber = Math.floor(Math.random() * 50);
console.log("Il numero dell'utente è " + userNumber);
console.log("Il numero della CPU è " + cpuNumber);

if (userNumber > cpuNumber) {
    console.log("Ha vinto l'utente!");
} else if (cpuNumber > userNumber) {
    console.log("Ha vinto la CPU!");
} else if (userNumber === cpuNumber) {
    console.log("Partita finita in parità!");
}