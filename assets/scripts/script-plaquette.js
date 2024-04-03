/* Script JS permettant de cacher l'un des deux terrains pour avoir la version "full" et la version "1/2"*/
function demiTerrain() {
  /* Cache le grand-terrain*/
  let CSSpropertiesGrandTerrain = document.getElementById("imgGrandTerrain2");
  CSSpropertiesGrandTerrain.style.display = "none";
  /* Affiche le demi-terrain*/
  let CSSpropertiesDemiTerrain = document.getElementById("imgDemiTerrain2");
  CSSpropertiesDemiTerrain.style.display = "inline";
}

function grandTerrain() {
  /* Cache le demi-terrain*/
  let CSSpropertiesDemiTerrain = document.getElementById("imgDemiTerrain2");
  CSSpropertiesDemiTerrain.style.display = "none";
  /* Affiche le grand-terrain*/
  let CSSpropertiesGrandTerrain = document.getElementById("imgGrandTerrain2");
  CSSpropertiesGrandTerrain.style.display = "inline";
}
