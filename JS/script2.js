//  AVIS 

document.getElementById('avisForm').addEventListener('submit', function(event) {
    event.preventDefault();
  

    let nom = document.getElementById('nom').value;
    let avis = document.getElementById('avis').value;
    let etoiles = document.getElementById('etoiles').value;
  

    let nouvelAvis = document.createElement('div');
    nouvelAvis.classList.add('avis');
    nouvelAvis.innerHTML = `
      <br><br><h4 class='pseudoavis'>${nom}</h4>
      <p class='peval'>Évaluation : ${etoiles} étoile(s)</p>
      <p class='descri-avis'>"${avis}"</p>
      <p class="lignesepa"></p><br><br>
    `;
  

    let avisList = document.getElementById('avisList');
    avisList.prepend(nouvelAvis);
  

    document.getElementById('nom').value = '';
    document.getElementById('avis').value = '';
    document.getElementById('etoiles').value = '';
    console.log(nouvelAvis);
  });
  