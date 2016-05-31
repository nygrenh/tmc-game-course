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
