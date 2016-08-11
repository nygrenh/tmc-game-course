function update () {

    game.physics.arcade.collide(player, platforms, (player, platform) => {
        platform.destroy()
        score += 1
        scoreText.text = 'Pisteet: ' + score
    })

    player.body.velocity.x = 0
    player.body.velocity.y = 0

    muutaSuuntaa()

    platforms.setAll('body.velocity.y', rubiininNopeus)
    if (timer.running) {
      timeText.text = "Aikaa jäljellä: " + remainingTime()
    }
}

function remainingTime() {
    var s = Math.round((timerEvent.delay - timer.ms) / 1000)
    var seconds = "0" + (s)
    return seconds.substr(-2)
}

function muutaSuuntaa() {
    if (cursors.left.isDown) {
        player.body.velocity.x = pelaajanNopeus
    } else if (cursors.right.isDown) {
        player.body.velocity.x = -1 * pelaajanNopeus
    }
}
