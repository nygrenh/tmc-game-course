function ylos() {
    x = edellinenPala[0];
    y = edellinenPala[1] - 1;
    lisaaPalaPiirrettavaksi(x, y);
}

function alas() {
    x = edellinenPala[0];
    y = edellinenPala[1] + 1;
    lisaaPalaPiirrettavaksi(x, y);
}

function vasemmalle() {
    x = edellinenPala[0] - 1;
    y = edellinenPala[1];
    lisaaPalaPiirrettavaksi(x, y);
}

function oikealle() {
    x = edellinenPala[0] + 1;
    y = edellinenPala[1];
    lisaaPalaPiirrettavaksi(x, y);
}

function lisaaPalaPiirrettavaksi(x, y) {
    var pala = [x, y];
    lisattava.push(pala)
    edellinenPala = pala;
}

function piirraSiirrot() {
    setInterval(function() {
        if (lisattava.length > 0) {
            var seuraavaPala = lisattava.shift();
            var x = seuraavaPala[0];
            var y = seuraavaPala[1];
            luoPala(x, y);
        }
    }, animaationHitaus);
}

function luoPala(x, y) {
    var pala = game.add.sprite(x * ruudunKoko, y * ruudunKoko, 'pala');
    pala.scale.setTo(skaala, skaala);
    edellinenPala = [x, y];
    palat.push(pala);
}
