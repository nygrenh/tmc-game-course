function update () {
    lueSuunta();
    liiku();

    if (törmääOmenaan()) {
        koko = koko + 1;
        pisteet = pisteet + 1;
        pisteetTekstinä.text = 'Score: ' + pisteet;
        omena.destroy();
        uusiOmena();
    }

    if (törmääItseensä() || törmääSeinään()) {
        game.state.start('game_over');
        return;
    }

    liikutaHäntää();
}

function uusiOmena() {
    var x = Math.floor(Math.random() * 40) * ruudunKoko;
    var y = Math.floor(Math.random() * 30) * ruudunKoko;
    omena = game.add.sprite(x, y, 'omena');
}
