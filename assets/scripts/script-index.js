/* Script JS permettant de cacher l'un des deux formulaires lorsqu'on appuie sur un bouton*/
function createAccount() {
  /* Cache le formulaire de connexion*/
  let CSSpropertiesForm1 = document.getElementById("connexionForm");
  CSSpropertiesForm1.style.display = "none";

  /* Affiche le formulaire de création de compte*/
  let CSSpropertiesForm2 = document.getElementById("creationAccountForm");
  CSSpropertiesForm2.style.display = "flex";
}

function identity() {
  /* Afficher le formulaire de connexion*/
  let CSSpropertiesForm1 = document.getElementById("connexionForm");
  CSSpropertiesForm1.style.display = "flex";

  /* Cacher le formulaire de création de compte*/
  let CSSpropertiesForm2 = document.getElementById("creationAccountForm");
  CSSpropertiesForm2.style.display = "none";
}
