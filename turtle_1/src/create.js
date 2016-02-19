var texture;

function create() {
    texture = game.add.renderTexture(800, 600, 'trail');
    game.stage.backgroundColor = '#3384e7';
    // LOCK FROM BEGINNING
    up();
    right();
    down();
    down();
    left();
    // LOCK TO END
    startMoving();
}
