var player;
var platforms;
var cursors;

var score = 0;
var scoreText;

function create() {

    player = game.add.sprite(100, 587, 'player');

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;

    platforms = game.add.physicsGroup();

    setInterval(() => {
        platforms.create(Math.floor(Math.random() * window.innerWidth), 100, 'platform');
    },  500);

    platforms.setAll('checkWorldBounds', true);
    platforms.setAll('outOfBoundsKill', true);

    game.physics.arcade.enable(platforms);

    cursors = game.input.keyboard.createCursorKeys();

    scoreText = game.add.text(16, 16, 'Pisteet: 0', { fontSize: '32px', fill: '#ffffff' });

}
