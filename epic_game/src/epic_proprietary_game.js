var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-area', { preload: preload, create: create, update: update });
var player;
var platforms;
var cursors;

function create() {

    player = game.add.sprite(100, 587, 'player');

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;

    platforms = game.add.physicsGroup();

    setInterval(() => {
        platforms.create(Math.floor(Math.random() * window.innerWidth), 0, 'platform');
    },  200);

    platforms.setAll('checkWorldBounds', true);
    platforms.setAll('outOfBoundsKill', true);

    game.physics.arcade.enable(platforms);

    cursors = game.input.keyboard.createCursorKeys();

}

function preload() {
    game.load.baseURL = '//ohjelmointikurssi.github.io/cdn/';

    game.stage.backgroundColor = '#000';

    game.load.image('player', 'images/player.png');
    game.load.image('platform', 'images/platform.png');

}

function update () {
    game.physics.arcade.collide(player, platforms, (player, platform) => {
        platform.destroy();
        alert('Game over!');
    });

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.left.isDown) {
        player.body.velocity.x = -250;
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 250;
    }

    platforms.setAll('body.velocity.y', 50);
}

function render () {}
