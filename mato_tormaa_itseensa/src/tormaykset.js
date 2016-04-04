function törmääItseensä() {
    var madonPää = mato[0];
    for (var i = 1; i < mato.length; i++) {
        // LOCK FROM BEGINNING
        if ( false ) {
        // LOCK TO END
            return true;
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
