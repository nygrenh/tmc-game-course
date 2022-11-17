function preload() {

    game.load.baseURL = 'https://download.mooc.fi'
    game.load.crossOrigin = 'anonymous'

    game.stage.backgroundColor = '#2980b9'

    game.load.image('player', '/matopeli/green.png')
    game.load.image('platform', '/matopeli/gem.png')
}
