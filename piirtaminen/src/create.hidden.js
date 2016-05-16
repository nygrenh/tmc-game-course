var palat;
var ruudunKoko;
var siirrot;
var näppäimet;
var siirrotTekstinä;
var skaala;
var lisattava;
var edellinenPala;


function create() {
    palat = [];
    siirrot = 0;
    lisattava = [];

    skaala = ruudunKoko / 20;

    game.stage.backgroundColor = '#8EB367';

    siirrotTekstinä = game.add.text(30, 20, 'Siirtoja: 0', { font: 'bold 14px sans-serif', fill: '#36381B', align: 'center' });

    luoPala(5, 5);

    lueKomennot();

    piirraSiirrot();
}
