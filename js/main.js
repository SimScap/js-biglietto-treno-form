const distanza = parseInt(prompt("Quanti chilometri devi percorrere?"));
document.getElementById('distance').innerHTML = distanza;
const eta = parseInt(prompt("Quanti anni hai?"));
document.getElementById('age').innerHTML = eta;
const prezzoKm = 0.27;
let prezzoSenzaSconto = prezzoKm * distanza;



if (eta <= 18){
    document.getElementById('costo').innerHTML = `Il prezzo del biglietto è di ${((prezzoSenzaSconto / 100) * 83).toFixed(2)} Euro `;   
}
else if (eta >= 65){
    document.getElementById('costo').innerHTML = `Il prezzo del biglietto è di ${((prezzoSenzaSconto / 100) * 67).toFixed(2)} Euro `;   
}
else{
    document.getElementById('costo').innerHTML = `Il prezzo del biglietto è di ${prezzoSenzaSconto.toFixed(2)} Euro `;   
}
