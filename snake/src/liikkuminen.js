function liiku() {
    var madonPää = mato[0]

    var x
    var y
    if (suunta === 'oikealle') {
        x = madonPää.x + ruudunKoko
        y = madonPää.y
    } else if (suunta === 'vasemmalle') {
        x = madonPää.x - ruudunKoko
        y = madonPää.y
    } else if (suunta === 'ylös') {
        x = madonPää.x
        y = madonPää.y - ruudunKoko
    } else if (suunta === 'alas') {
        x = madonPää.x
        y = madonPää.y + ruudunKoko
    }
    mato.unshift(game.add.sprite(x, y, 'mato'))
}

function liikutaHäntää() {
    if (mato.length > koko) {
        mato.pop().destroy()
    }
}

function lueSuunta() {
    if (näppäimet.right.isDown && suunta !== 'vasemmalle') {
        suunta = 'oikealle'
    }
    if (näppäimet.left.isDown && suunta !== 'oikealle') {
        suunta = 'vasemmalle'
    }
    if (näppäimet.up.isDown && suunta !== 'alas') {
        suunta = 'ylös'
    }
    if (näppäimet.down.isDown && suunta !== 'ylös') {
        suunta = 'alas'
    }
}
