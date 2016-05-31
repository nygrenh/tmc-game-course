var texture

function create() {
    texture = game.add.renderTexture(800, 600, 'trail')
    game.stage.backgroundColor = '#3384e7'
    // LOCK FROM BEGINNING
    moveTo(700, 500)
    moveTo(400, 100)
    moveTo(100, 500)
    // LOCK TO END
    startMoving()
}
