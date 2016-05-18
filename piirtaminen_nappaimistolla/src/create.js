var palat;
var ruudunKoko;
var siirrot;
var koko;
var näppäimet;
var siirrotTekstinä;
var skaala;

function create() {
  palat = [];
  ruudunKoko = 10;
  siirrot = 0;
  skaala = 0.5;


  näppäimet = game.input.keyboard.createCursorKeys();

  game.stage.backgroundColor = '#8EB367';

  luoEnsimmainenPala(5, 5);

  siirrotTekstinä = game.add.text(30, 20, 'Siirtoja: 0', { font: 'bold 14px sans-serif', fill: '#36381B', align: 'center' });

  game.time.slowMotion = 10;
}

function luoEnsimmainenPala(x, y) {
    palat[0] = game.add.sprite(x * ruudunKoko, y * ruudunKoko, 'pala');
    palat[0].scale.setTo(skaala, skaala);
}
