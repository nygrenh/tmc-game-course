var player
var gems
var bombs
var cursors

var score = 0
var scoreText

var timer
var timerEvent
var timeText

function create() {
    timer = game.time.create()
    timerEvent = timer.add(Phaser.Timer.SECOND * 20, endTimer, game)
    timer.start()

    player = game.add.sprite(100, 587, 'player')

    game.physics.arcade.enable(player)

    player.body.collideWorldBounds = true

    gems = game.add.physicsGroup()
    bombs = game.add.physicsGroup()

    setInterval(() => {
        gems.create(Math.floor(Math.random() * window.innerWidth), 0, 'platform')
    },  500)

    setInterval(() => {
        bombs.create(Math.floor(Math.random() * window.innerWidth), 0, 'bomb')
    },  500)

    gems.setAll('checkWorldBounds', true)
    gems.setAll('outOfBoundsKill', true)

    game.physics.arcade.enable(gems)
    game.physics.arcade.enable(bombs)

    cursors = game.input.keyboard.createCursorKeys()

    scoreText = game.add.text(16, 10, 'Pisteet: 0', { fontSize: '32px', fill: '#ffffff' })
    timeText = game.add.text(600, 18, 'Aikaa jäljellä: 20', { fontSize: '20px', fill: '#ffffff' })
}

function endTimer() {
    timer.stop()
    game.state.start('game_over')
}
