# MAIL E DADI

### ESERCIZIO 1

#### - CONSEGNA

```
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
```

#### - SVOLGIMENTO

In questo esercizio dovremmo dichiare una variabile _const_ alla quale assegniamo un **array** contenente svariate email. 

Successivamente dichiariamo un altra variabile _const_ alla quale assegnamo una stringa contenente quello l'email che l'utente inserisce in un prompt. 

Una volta che abbiamo dichiarato le due variabili, possiamo inizializzare un **contatore** che ciclerà tutti gli indici dell'array in questione finché il nostro browser non troverà una corrispondenza con l'email inserita, e il contenuto di un indice _n_ presente nell'array. 

Per testare se il programma funziona, per vedersi negato l'accesso scriviamo un email a caso, se invece vogliamo essere autorizzati copiamo un email presente nell'array.

----

### ESERCIZIO 2

#### - CONSEGNA

```
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
```

#### - SVOLGIMENTO

In questo esercizio, non avremo bisogno di altro se non di due variabili (una per l'utente e una per il computer) alle quali assegniamo due numeri randomici. Dichiariamo la funzione di calcolo di numero randomico in questo modo:

```JS
Math.floor((Math.random() * 6) + 1);
```
per far si che i numeri partano da 1 a 6.

Successivamente dovremo semplicemente usare una condizione per stabilire se il numero dell'utente è maggiore di quello del computer, e viceversa. Verranno stampati in console i numeri generati e il nome del vincitore.

## CONSIDERAZIONI POST ESERCIZI

JS sta diventando sempre più divertente e piano piano sto entrando nell'ottica del suo funzionamento. Se nell'esercizio del form del biglietto ho impiegato quasi tutta la giornata per svolgerlo, questo e FizzBuzz mi hanno portato via rispettivamente 50 e 25 minuti. Ho notato che spesso cambio approccio rispetto a quello dettato sul readme, ma credo sia normale perché ci vuole allenamento per capire se l'approccio pensato prima di scrivere codice, rispetta tutti i casi che si possono verificare successivamente.

P.S. Dando un occhiata all'esercizio il giorno dopo mi sono accorto che in quello delle mail c'erano due problemi. Il primo è la presenza di un break che esce dal ciclo alla prima email non corrispondente. Rimosso il break è sorto il problema che la console stampava n messaggi di errore quante erano le email non corrispondenti. Per ovviare a questo, abbiamo dichiarare una variabile **status** che è false di default, ma diventa true se l'email corrisponde. Appena l'email corrisponde si esce dal ciclo, viene verificato il contenuto di **status**, e viene stmapato un messaggio di conseguenza.