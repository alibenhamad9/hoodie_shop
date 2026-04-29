// Inscription
var inscriptionForm = document.getElementById("inscriptionForm");

if (inscriptionForm) {
  inscriptionForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var nom = document.getElementById("nom").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var message = document.getElementById("message");

    if (nom === "" || email === "" || password === "" || confirmPassword === "") {
      message.style.color = "red";
      message.textContent = "Veuillez remplir tous les champs.";
      return;
    }

    if (password !== confirmPassword) {
      message.style.color = "red";
      message.textContent = "Les mots de passe ne correspondent pas.";
      return;
    }

    message.style.color = "green";
    message.textContent = "Inscription réussie !";
    inscriptionForm.reset();
  });
}

// Commande
function commander(produit) {
  var commandeMessage = document.getElementById("commandeMessage");
  if (commandeMessage) {
    commandeMessage.style.color = "green";
    commandeMessage.textContent = "Vous avez commandé : " + produit;
  }
}