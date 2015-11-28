var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-area', { preload: preload, create: create, update: update });
var player;
var platforms;
var cursors;

var score = 0;
var scoreText;

function create() {

    player = game.add.sprite(100, 587, 'player');
    player.scale.set(0.1, 0.1);

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;

    platforms = game.add.physicsGroup();

    setInterval(() => {
        platforms.create(Math.floor(Math.random() * window.innerWidth), 0, 'platform');
    },  500);

    platforms.setAll('checkWorldBounds', true);
    platforms.setAll('outOfBoundsKill', true);

    game.physics.arcade.enable(platforms);

    cursors = game.input.keyboard.createCursorKeys();

    scoreText = game.add.text(16, 16, 'Pisteet: 0', { fontSize: '32px', fill: '#ff0000' });

}

function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';

    game.stage.backgroundColor = '#000';

    game.load.image('player', 'sprites/bunny.png');
    game.load.image('platform', 'sprites/carrot.png');

}

function update () {
    game.physics.arcade.collide(player, platforms, (player, platform) => {
        platform.destroy();
        score += 1;
        scoreText.text = 'Pisteet: ' + score;
    });

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown) {
        player.body.velocity.x = -250;
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 250;
    }

    platforms.setAll('body.velocity.y', 500);
}

function render () {}
