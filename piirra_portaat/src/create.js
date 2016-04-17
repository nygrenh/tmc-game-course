var palat;
var ruudunKoko;
var siirrot;
var koko;
var näppäimet;
var siirrotTekstinä;
var skaala;
var lisattava;
var edellinenPala;
var animaationHitaus;

function create() {
    palat = [];
    siirrot = 0;
    lisattava = [];
    // LOCK FROM BEGINNING
    animaationHitaus = 500;
    ruudunKoko = 20;
    // START LOCK
    skaala = ruudunKoko / 20;

    game.stage.backgroundColor = '#8EB367';

    siirrotTekstinä = game.add.text(30, 20, 'Siirtoja: 0', { font: 'bold 14px sans-serif', fill: '#36381B', align: 'center' });
    // END LOCK
    luoPala(9, 20);
    // START LOCK
    lueKomennot();

    piirraSiirrot();
}

function lueKomennot() {
    // END LOCK
    // Kirjoita piirtokomennot tänne

    // LOCK TO END
}
