const generaButton = document.getElementById('genera');
generaButton.addEventListener('click', function(){ 
    const fasciaEta = document.getElementById('eta-utente');
    let eta = fasciaEta.value;    

    const km = document.getElementById('kilometri');
    let distanza = parseFloat(km.value)

    const nameInput = document.getElementById('nome-cognome');
    let nomeCognome = nameInput.value;

    const carrozza = Math.floor(Math.random() * 9) +1;
    const codiceCp = Math.floor(Math.random() * 100000) +1;

    const message = ""

    const prezzoKm = 0.27;
    let prezzoSenzaSconto = prezzoKm * distanza;

    if (eta == "minorenne"){((prezzoSenzaSconto / 100) * 83);
    }
    else if (eta == "over65"){((prezzoSenzaSconto / 100) * 67);
    }
    else{(prezzoSenzaSconto);
    }
    document.getElementById('nome-passeggero').innerHTML = nomeCognome;
    document.getElementById('costo-biglietto').innerHTML = prezzoSenzaSconto.toFixed(2);
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = codiceCp;

});
