let musica;

function preload(){
  musica = loadSound("SUA MUSICA")
}

function setup(){
  musica.play();
  musica.loop();
}