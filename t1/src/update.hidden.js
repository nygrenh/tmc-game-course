function update () {
    game.physics.arcade.collide(player, gems, (player, gem) => {
        gem.destroy()
        updateScore(1)
    })

    game.physics.arcade.collide(player, bombs, (player, bomb) => {
        bomb.destroy()
        updateScore(-5)
    })

    player.body.velocity.x = 0
    player.body.velocity.y = 0

    if (cursors.left.isDown) {
        player.body.velocity.x = -1 * pelaajanNopeus
    } else if (cursors.right.isDown) {
        player.body.velocity.x = pelaajanNopeus
    }

    gems.setAll('body.velocity.y', rubiinejenNopeus)
    bombs.setAll('body.velocity.y', pommienNopeus)
    if (timer.running) {
      timeText.text = "Aikaa jäljellä: " + remainingTime()
    }
}

function remainingTime() {
    var s = Math.round((timerEvent.delay - timer.ms) / 1000)
    var seconds = "0" + (s)
    return seconds.substr(-2)
}

function updateScore(amount) {
    score += amount
    scoreText.text = 'Pisteet: ' + score
}
