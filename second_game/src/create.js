var player;
var platforms;
var cursors;
// LOCK
var score = 0;
var scoreText;
// END LOCK
function create() {

    player = game.add.sprite(100, 587, 'player');

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;

    platforms = game.add.physicsGroup();
    // LOCK
    setInterval(() => {
        platforms.create(Math.floor(Math.random() * window.innerWidth), 0, 'platform');
    },  500);

    platforms.setAll('checkWorldBounds', true);
    platforms.setAll('outOfBoundsKill', true);
    // END LOCK
    game.physics.arcade.enable(platforms);

    cursors = game.input.keyboard.createCursorKeys();
    // LOCK
    scoreText = game.add.text(16, 16, 'Pisteet: 0', { fontSize: '32px', fill: '#ff0000' });
    // END LOCK
}
