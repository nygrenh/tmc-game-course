var mato;
var omena;
var suunta;
var kasva;
var pisteet;
var pisteetTekstinä;

var ruudunKoko;
var näppäimet;

function create() {
    mato = [];
    omena = {};
    suunta = 'oikealle';
    kasva = false;
    pisteet = 0;
    ruudunKoko = 20;

    näppäimet = game.input.keyboard.createCursorKeys();

    game.stage.backgroundColor = '#8EB367';

    luoMato();
    uusiOmena();

    pisteetTekstinä = game.add.text(30, 20, 'Score: 0', { font: 'bold 14px sans-serif', fill: '#36381B', align: 'center' });

    this.game.time.slowMotion = 10;
}

function luoMato() {
    for (var i = 0; i < 10; i++) {
        mato[i] = game.add.sprite(160 - i * ruudunKoko, 160, 'mato');
    }
}
