var palat
var ruudunKoko
var siirrot
var koko
var näppäimet
var siirrotTekstinä
var skaala
var lisattava
var edellinenPala
var animaationHitaus

function create() {
    palat = []
    siirrot = 0
    lisattava = []
    // LOCK FROM BEGINNING
    animaationHitaus = 1
    ruudunKoko = 10
    // START LOCK
    skaala = ruudunKoko / 20

    game.stage.backgroundColor = '#8EB367'

    siirrotTekstinä = game.add.text(30, 20, 'Siirtoja: 0', { font: 'bold 14px sans-serif', fill: '#36381B', align: 'center' })
    // END LOCK
    luoPala(3, 55)
    // START LOCK
    lueKomennot()

    piirraSiirrot()
}

function lueKomennot() {

    var indeksi = 1
    while (true) {
        indeksi = indeksi + 1
        // END LOCK

        // Kirjoita koodi tänne
        ylos()

        // LOCK TO END
        if (indeksi > 10) {
            break
        }
    }


}
