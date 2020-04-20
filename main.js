// DESCRIZIONE:
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// oggetto che descrive uno studente con le 3 proprietà
var primoStudente = {
  "nome" : "Tiziano",
  "cognome" : "Ferro",
  "eta" : 40
}

// stampo tramite for le tre proprietà
for(var nomeChiave in primoStudente){
  console.log(primoStudente[nomeChiave]);
}

console.log(primoStudente.nome + " " + primoStudente.cognome + " " + primoStudente.eta + " anni");
console.log(primoStudente);


// creo array di oggetti che descrivono studenti con le 3 proprietà
var studenti = [
  {
    "nome" : "Gianna",
    "cognome" : "Nannini",
    "eta" : 63
  },
  {
    "nome" : "Paola",
    "cognome" : "Turci",
    "eta" : 55
  },
  {
    "nome" : "Rocco",
    "cognome" : "Hunt",
    "eta" : 25
  },
  {
    "nome" : "Giordana",
    "cognome" : "Angi",
    "eta" : 26
  }
]

console.log(studenti);

// stampo tramite for le tre proprietà di tutti gli oggetti
for (var i = 0; i < studenti.length; i++){
  console.log(studenti[i].nome + " " + studenti[i].cognome + " " + studenti[i].eta + " anni");
}

// aggiungo con tre 3 prompt un nuovo oggetto studente con le tre proprietà
studenti.push({
  "nome" : prompt("Inserisci nome studente"),
  "cognome" : prompt("Inserisci cognome studente"),
  "eta" : parseInt(prompt("Inserisci età studente"))
})

// stampo tramite for le tre proprietà di tutti gli oggetti compreso quello pushato
for (var i = 0; i < studenti.length; i++){
  console.log(studenti[i].nome + " " + studenti[i].cognome + " " + studenti[i].eta + " anni");
  console.log("valore N su iterazione num " + i + " è oggetto: ", studenti[i]);
}

console.log(studenti);
