function preload() {

    game.load.baseURL = 'https://henriknygren.fi/';
    game.load.crossOrigin = 'anonymous';

    game.stage.backgroundColor = '#2980b9';

    game.load.image('player', 'assets/green.png');
    game.load.image('platform', 'assets/gem.png');
}
