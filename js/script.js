var chilometri = prompt('Quanti chilometri vuoi percorrere?');
var anni = prompt('Quanti anni hai?');

var prezzo = chilometri * 0.21;

var scontoMinorenni;
var scontoOver65;


if(anni < 18){
   scontoMinorenni = ((prezzo * 20) / 100);
   prezzo = prezzo - scontoMinorenni;
   document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + '€';  
}
else if(anni >= 65){
    scontoOver65 = ((prezzo * 40) / 100);
    prezzo = prezzo - scontoOver65;
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + '€';
} else{
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + '€';
}
