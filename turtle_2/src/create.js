var texture;

function create() {
    texture = game.add.renderTexture(800, 600, 'trail');
    game.stage.backgroundColor = '#3384e7';
    // LOCK FROM BEGINNING
    up();
    moveTo(500, 250);
    moveTo(500, 150);
    moveTo(100, 150);
    moveTo(100, 250);
    // LOCK TO END
    startMoving();
}
