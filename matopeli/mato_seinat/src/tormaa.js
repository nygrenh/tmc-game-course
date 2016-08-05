function törmääSeinään() {
    var madonPää = mato[0]
    var pelinLeveys = game.width
    var pelinKorkeus = game.height

    var mennytOikealtaYli = madonPää.x >= pelinLeveys
    var mennytVasemmaltaYli = madonPää.x < 0
    // LOCK FROM BEGINNING
    var mennytAlhaaltayli = false
    var mennytYlhäältäYli = false
    // LOCK TO END
    if (mennytOikealtaYli || mennytVasemmaltaYli || mennytAlhaaltayli || mennytYlhäältäYli) {
        return true
    }
    return false
}
