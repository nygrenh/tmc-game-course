function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';

    game.stage.backgroundColor = '#000';

    game.load.image('player', 'sprites/bunny.png');
    game.load.image('platform', 'sprites/carrot.png');

}
