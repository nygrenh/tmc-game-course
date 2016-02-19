var sprite;
var tween;
var startX = 100;
var startY = 250;
var xDestinations = [startX];
var yDestinations = [startY];
var moveStrength = 100;

function up() {
    var pX = xDestinations[xDestinations.length - 1];
    var pY = yDestinations[yDestinations.length - 1];
    yDestinations.push(pY - moveStrength);
    xDestinations.push(pX);
}

function down() {
    var pX = xDestinations[xDestinations.length - 1];
    var pY = yDestinations[yDestinations.length - 1];
    yDestinations.push(pY + moveStrength);
    xDestinations.push(pX);
}

function left() {
    var pX = xDestinations[xDestinations.length - 1];
    var pY = yDestinations[yDestinations.length - 1];
    yDestinations.push(pY);
    xDestinations.push(pX - moveStrength);
}

function right() {
    var pX = xDestinations[xDestinations.length - 1];
    var pY = yDestinations[yDestinations.length - 1];
    yDestinations.push(pY);
    xDestinations.push(pX + moveStrength);
}

function moveTo(x, y) {
    xDestinations.push(x);
    yDestinations.push(y);
}

function startMoving() {
    sprite = game.add.sprite(startX, startY, 'ball');

    tween = game.add.tween(sprite);
    tween.frameBased = true;
    var distance = calculateDistance();
    tween.to({ x: xDestinations, y: yDestinations }, distance * 5, Phaser.Easing.Linear.None);
    tween.onUpdateCallback(trail);

    game.add.sprite(0, 0, texture);
    tween.start();
}

function calculateDistance() {
    var distance = 0;
    var x = xDestinations[0];
    var y = yDestinations[0];
    for(var i = 01; i < xDestinations.length; i++) {
        distance += Math.abs(x - xDestinations[i]) + Math.abs(y - yDestinations[i]);
        x = xDestinations[i];
        y = yDestinations[i];
    }
    return distance;
}

function trail() {
    var pos = sprite.position;
    texture.renderXY(sprite, pos.x, pos.y);
}
