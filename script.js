var nome = prompt('Qual è il tuo nome?');
console.log('nome utente: ' + nome);

var cognome = prompt('Qual è il tuo cognome?');
console.log('cognome utente: ' + cognome);

var colore = prompt('Qual è il tuo colore preferito?');
console.log('colore scelto: ' + colore);

var anno = new Date() .getFullYear();
console.log('anno: ' + anno);

var password = nome + cognome + colore + anno;

var passwordJs = document.getElementById('password-generator');

passwordJs.innerText = 'La tua password è: ' + password;
