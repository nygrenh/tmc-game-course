var texture

function create() {
    texture = game.add.renderTexture(800, 600, 'trail')
    game.stage.backgroundColor = '#3384e7'
    // LOCK FROM BEGINNING
    for (var i = 0 i < 3 i++) {
        up()
        right()
        down()
        right()
    }

    down()

    for (var i = 0 i < 3 i++) {
        left()
        down()
        left()
        up()
    }
    // LOCK TO END
    startMoving()
}
