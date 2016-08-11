var player
var platforms
var cursors

var score = 0
var scoreText

var timer
var timerEvent
var timeText

function create() {
    timer = game.time.create()
    timerEvent = timer.add(Phaser.Timer.SECOND * 10, endTimer, game)
    timer.start()

    player = game.add.sprite(100, 587, 'player')

    game.physics.arcade.enable(player)

    player.body.collideWorldBounds = true

    platforms = game.add.physicsGroup()

    setInterval(() => {
        platforms.create(Math.floor(Math.random() * window.innerWidth), 100, 'platform')
    },  500)

    platforms.setAll('checkWorldBounds', true)
    platforms.setAll('outOfBoundsKill', true)

    game.physics.arcade.enable(platforms)

    cursors = game.input.keyboard.createCursorKeys()

    scoreText = game.add.text(16, 16, 'Pisteet: 0', { fontSize: '32px', fill: '#ffffff' })
    timeText = game.add.text(600, 18, 'Aikaa jäljellä: 10', { fontSize: '20px', fill: '#ffffff' })
}

function endTimer() {
    timer.stop()
    game.state.start('game_over')
}
