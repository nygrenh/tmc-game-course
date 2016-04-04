var mato;
var omena;
var suunta;
var koko;
var pisteet;
var pisteetTekstinä;

var ruudunKoko;
var näppäimet;

function create() {
    mato = [];
    omena = {};
    // LOCK FROM BEGINNING
    suunta = 'alas';
    // START LOCK
    koko = 4;
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
    // END LOCK
    luoMadonOsa(35, 25);
    // LOCK TO END
}

function luoMadonOsa(x, y) {
    mato.push(game.add.sprite(x * ruudunKoko, y * ruudunKoko, 'mato'));
}
