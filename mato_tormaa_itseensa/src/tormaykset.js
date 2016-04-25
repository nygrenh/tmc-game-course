function törmääItseensä() {
    var indeksi = 1;
    while (true) {
        var madonPää = mato[0];
        var nykyinenMadonOsa = mato[indeksi];
        indeksi = indeksi + 1;
        // LOCK FROM BEGINNING
        var xKoordinaatitOvatSamat = false;
        var yKoordinaatitOvatSamat = false;
        // LOCK TO END
        if ( xKoordinaatitOvatSamat && yKoordinaatitOvatSamat ) {
            return true
        }
        if (indeksi >= mato.length) {
            break;
        }
    }
    return false;
}

function törmääSeinään() {
    var madonPää = mato[0];
    var pelinLeveys = this.game.width;
    var pelinKorkeus = this.game.height;

    var mennytOikealtaYli = madonPää.x >= pelinLeveys;
    var mennytVasemmaltaYli = madonPää.x < 0;
    var mennytAlhaaltayli = false
    var mennytYlhäältäYli = false;
    if (mennytOikealtaYli || mennytVasemmaltaYli || mennytAlhaaltayli || mennytYlhäältäYli) {
        return true;
    }
    return false;
}

function törmääOmenaan() {
    for (var i = 0; i < mato.length; i++){
        if (mato[i].x === omena.x && mato[i].y === omena.y) {
            return true;
        }
    }
    return false;
}
