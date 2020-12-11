alert('Occhio....potrebbe essere un vairus....se decidi di continuare lo fai a tuo rischio e pericolo!')

var nome = prompt('Qual è il tuo nome?');
console.log('nome utente: ' + nome);

var cognome = prompt('Qual è il tuo cognome?');
console.log('cognome utente: ' + cognome);

alert(nome +" "+ cognome + '.........ahahah che nome ridicolo!');

var colore = prompt('Qual è il tuo colore preferito?');
console.log('colore scelto: ' + colore);

alert(colore + '????????'+" "+ 'Forse era meglio fermarsi al nome ;)')

var annocorrente = new Date() .getFullYear();

var anni = prompt('E dimmi...quanti anni hai?');

var eta = annocorrente - anni;

alert('ah quindi sei del' +" "+ eta);

alert('...non che mi interessi particolarmente...');

alert('Ora stai bene attento a quale sarà la tua scelta....');

var scelta = document.getElementById('simpatia');

scelta.innerHTML = '<p style="padding-bottom:10px;">Preferisci la pizza o il sushi?</p><div style="text-align: center;"><button onclick="sceltaSbagliata()" style="margin-right:20px;">Pizza</button><button onclick="sceltaSbagliata()">Sushi</button></div>';

function sceltaSbagliata(){
  alert('Scelta sbagliata...muahahahahaha');

  var virus = document.getElementById('vairus');

  virus.innerHTML ='<h1 style="background-color: black;color: #fff; padding: 30px;">Un virus ha appena infettato il tuo computer!!!!<br>A breve esploderà!Muahahahahahahah</h1>';
}











// var anno = new Date() .getFullYear();
// console.log('anno: ' + anno);
//
// var password = nome + cognome + colore + anno;
//
// var passwordJs = document.getElementById('password-generator');
//
// passwordJs.innerText = 'La tua password è: ' + password;
