function preload() {

    game.load.baseURL = 'https://download.mooc.fi'
    game.load.crossOrigin = 'anonymous'

    game.stage.backgroundColor = '#000'

    game.load.image('player', 'assets/player.png')
    game.load.image('platform', 'assets/platform.png')

}
