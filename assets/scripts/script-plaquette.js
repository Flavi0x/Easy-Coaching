/* Script JS permettant de cacher l'un des deux terrains pour avoir la version "full" et la version "1/2"*/
function demiTerrain() {
  /* Cache le grand-terrain*/
  let CSSpropertiesGrandTerrain = document.getElementById("zoneDraw1");
  CSSpropertiesGrandTerrain.style.display = "none";
  /* Affiche le demi-terrain*/
  let CSSpropertiesDemiTerrain = document.getElementById("zoneDraw2");
  CSSpropertiesDemiTerrain.style.display = "inline";
}

function grandTerrain() {
  /* Cache le demi-terrain*/
  let CSSpropertiesDemiTerrain = document.getElementById("zoneDraw2");
  CSSpropertiesDemiTerrain.style.display = "none";
  /* Affiche le grand-terrain*/
  let CSSpropertiesGrandTerrain = document.getElementById("zoneDraw1");
  CSSpropertiesGrandTerrain.style.display = "inline";
}

/* Script JS permettant de dessiner sur l'image (canvas)*/
class Draw {
  constructor(id) {
    this.started = false;
    this.ctx = document.getElementById(id);

    this.canvas = this.ctx.getContext("2d");
    this.move = this.move.bind(this);
    this.click = this.click.bind(this);
    this.up = this.up.bind(this);

    this.ctx.addEventListener("mousemove", this.move);
    this.ctx.addEventListener("mousedown", this.click);
    this.ctx.addEventListener("mouseup", this.up);
  }
  move(ev) {
    if (this.started) {
      this.canvas.lineTo(ev.offsetX, ev.offsetY);
      this.canvas.strokeStyle = "white";
      this.canvas.stroke();
    }
  }
  click(ev) {
    this.started = true;
    this.canvas.beginPath();
    this.canvas.moveTo(ev.offsetX, ev.offsetY);
  }
  up(ev) {
    this.started = false;
  }
}
new Draw("zoneDraw1");
new Draw("zoneDraw2");
/* RESPONSIVE DU PREMIER CANVAS (grand terrain)*/
let canvas1 = document.getElementById("zoneDraw1");
window
  .matchMedia("(max-width : 980px)")
  .addEventListener("change", responsive1);

function responsive1() {
  canvas1.style.backgroundSize = "800px";
  canvas1.width = 799;
  canvas1.height = 430;
}
window
  .matchMedia("(max-width : 815px)")
  .addEventListener("change", responsive2);

function responsive2() {
  canvas1.style.backgroundSize = "615px";
  canvas1.width = 616;
  canvas1.height = 334;
}
window
  .matchMedia("(max-width : 630px)")
  .addEventListener("change", responsive3);

function responsive3() {
  canvas1.style.backgroundSize = "500px";
  canvas1.width = 502;
  canvas1.height = 271;
}
window
  .matchMedia("(max-width : 515px)")
  .addEventListener("change", responsive4);

function responsive4() {
  canvas1.style.backgroundSize = "500px";
  canvas1.width = 502;
  canvas1.height = 271;
  canvas1.style.transform = "rotate(90deg)";
  canvas1.style.marginTop = "135px";
}
/* RESPONSIVE DU DEUXIÈME CANVAS (demi terrain)*/
let canvas2 = document.getElementById("zoneDraw2");
window
  .matchMedia("(max-width : 545px)")
  .addEventListener("change", responsive5);

function responsive5() {
  canvas2.style.backgroundSize = "350px";
  canvas2.width = 345;
  canvas2.height = 323;
}
window
  .matchMedia("(max-width : 375px)")
  .addEventListener("change", responsive6);

function responsive6() {
  canvas2.style.backgroundSize = "250px";
  canvas2.width = 247;
  canvas2.height = 223;
}
