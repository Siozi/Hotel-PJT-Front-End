// RESA
document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let chType = document.getElementById('chType').value;
    let arriveeDate = new Date(document.getElementById('arriveeDate').value);
    let departDate = new Date(document.getElementById('departDate').value);
    let nbDePers = document.getElementById('nbDePers').value;

    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    let changeArriveeDate = arriveeDate.toLocaleDateString('fr-FR', options);
    let changeDepartDate = departDate.toLocaleDateString('fr-FR', options);

    let results = 'Votre demande pour une chambre ' + chType + ' pour ' + nbDePers +' personnes, avec une arrivée le ' + changeArriveeDate + ' et un départ le ' + changeDepartDate + ' est disponible. ';
    document.getElementById('results').innerHTML = results;
    console.log(results);
});

