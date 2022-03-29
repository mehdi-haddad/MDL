function signup() {
    let password, email;
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
    sendData(password, email);
}

function sendData(password, email) {
    var XHR = new XMLHttpRequest();
    var params = 'email='+email+'&password='+password;

    // Ce qui se passe si la soumission s'est opérée avec succès
    XHR.addEventListener('load', function(event) {
      alert('Ouais ! Données envoyées et réponse chargée.');
    });
  
    // Ce qui se passe en cas d'erreur
    XHR.addEventListener('error', function(event) {
      alert('Oups! Quelque chose s\'est mal passé.');
    });
  
    // Configuration de la requête
    XHR.open('POST', 'http://localhost:3000/add_user');
    XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Expédiez l'objet FormData ; les en-têtes HTTP sont automatiquement définies
    XHR.send(params);
}