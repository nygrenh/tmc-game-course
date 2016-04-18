var palat;
var ruudunKoko;
var siirrot;
var koko;
var näppäimet;
var siirrotTekstinä;
var skaala;

function create() {
    palat = [];
    ruudunKoko = 40;
    siirrot = 0;
    skaala = ruudunKoko / 20;

    näppäimet = game.input.keyboard.createCursorKeys();

    game.stage.backgroundColor = '#8EB367';

    siirrotTekstinä = game.add.text(30, 20, 'Paloja: 0', { font: 'bold 14px sans-serif', fill: '#36381B', align: 'center' });
    // LOCK FROM BEGINNING
    luoPala(5, 5);
    // Piirrä loppu kuvasta täällä

    // LOCK TO END
}

function luoPala(x, y) {
    var pala = game.add.sprite(x * ruudunKoko, y * ruudunKoko, 'pala');
    pala.scale.setTo(skaala, skaala);
    palat.push(pala);
}
