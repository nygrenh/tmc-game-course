var mato;
var ruudunKoko;
var siirrot;
var koko;
var näppäimet;
var siirrotTekstinä;

function create() {
  mato = [];
  omena = {};
  ruudunKoko = 20;
  siirrot = 0;

  näppäimet = game.input.keyboard.createCursorKeys();

  game.stage.backgroundColor = '#8EB367';

  luoMato();

  siirrotTekstinä = game.add.text(30, 20, 'Siirtoja: 0', { font: 'bold 14px sans-serif', fill: '#36381B', align: 'center' });

  this.game.time.slowMotion = 10;
}

function luoMato() {
    mato[0] = game.add.sprite(160, 160, 'mato');
}
