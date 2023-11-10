'use strict'

const emailsList = ["erjembo@ew.bz", "fut@tomihmep.cf", "zaj@tusef.au", "vu@bi.mc", "gesozebu@de.pn", "mues@zofisuc.ky", "apigo@tohucbak.org", "litiduz@dulgurgi.lb", "edaam@kut.pg", "lomafsel@tepvib.pr", "uma@fahi.gh", "cu@ohefi.org", "fazefuga@awses.fk", "mavsifco@ik.eh", "cezam@pu.lt", "mibpel@kotceiro.ac", "soriwa@gamdet.fj", "ap@nizgoumu.gi", "sanhi@re.dm", "vundemi@juku.kh", "visiret@big.rs", "os@nog.in", "behbow@isuig.tn", "bitgivob@saowpum.fj", "du@ru.nr"];
const userEmail = prompt("Inserisci la tua email");
let statusCheck = false;

for (let counter = 0; counter < emailsList.length; counter++) {
    if (userEmail === emailsList[counter]) {
        statusCheck = true;
        break;
    }
}

if (statusCheck === true) {
    console.log("Sei autorizzato ad entrare nel nostro database di armi nucleari!");
} else {
    console.log("Mi spiace, devi riprogrammare il tuo attacco terroristico alla prossima volta :(");
}
