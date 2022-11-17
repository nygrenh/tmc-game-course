var player
var platforms
var cursors

function create() {

    player = game.add.sprite(100, 587, 'player')

    game.physics.arcade.enable(player)

    player.body.collideWorldBounds = true

    platforms = game.add.physicsGroup()

    setInterval(() => {
        platforms.create(Math.floor(Math.random() * window.innerWidth), 0, 'platform')
    },  200)

    platforms.setAll('checkWorldBounds', true)
    platforms.setAll('outOfBoundsKill', true)

    game.physics.arcade.enable(platforms)

    cursors = game.input.keyboard.createCursorKeys()

}

function preload() {
    game.load.baseURL = 'https://download.mooc.fi'
    game.load.crossOrigin = 'anonymous'

    game.stage.backgroundColor = '#000'

    game.load.image('player', '/matopeli/player.png')
    game.load.image('platform', '/matopeli/platform.png')

}

function update () {
    game.physics.arcade.collide(player, platforms, (player, platform) => {
        platform.destroy()
        alert('Game over!')
    })

    player.body.velocity.x = 0
    player.body.velocity.y = 0

    if (cursors.left.isDown) {
        player.body.velocity.x = -250
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 250
    }

    platforms.setAll('body.velocity.y', 50)
}

function render () {}
