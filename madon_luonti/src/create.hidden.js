var mato;
var omena;
var koko;
var pisteet;
var pisteetTekstinä;

var ruudunKoko;
var näppäimet;

function create() {
    mato = [];
    omena = {};
    koko = 5000;
    pisteet = 0;
    ruudunKoko = 20;

    näppäimet = game.input.keyboard.createCursorKeys();

    game.stage.backgroundColor = '#8EB367';

    luoMato();
    uusiOmena();

    pisteetTekstinä = game.add.text(30, 20, 'Score: 0', { font: 'bold 14px sans-serif', fill: '#36381B', align: 'center' });

    game.time.slowMotion = 10;
}

function luoMadonOsa(x, y) {
    mato.push(game.add.sprite(x * ruudunKoko, y * ruudunKoko, 'mato'));
}
