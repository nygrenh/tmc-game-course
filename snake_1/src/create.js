var mato;
var ruudunKoko;

function create() {
    mato = [];
    ruudunKoko = 20;

    näppäimet = game.input.keyboard.createCursorKeys();

    game.stage.backgroundColor = '#8EB367';

    luoMato();
}

function luoMato() {
    // LOCK FROM BEGINNING
    luoMadonOsa(3, 5);
    luoMadonOsa(4, 4);
    luoMadonOsa(5, 5);
    luoMadonOsa(6, 5);
    luoMadonOsa(7, 5);
    // LOCK TO END
}

function luoMadonOsa(x, y) {
    mato.push(game.add.sprite(x * ruudunKoko, y * ruudunKoko, 'mato'))
}
