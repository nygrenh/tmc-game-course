function update () {

    game.physics.arcade.collide(player, platforms, (player, platform) => {
        platform.destroy()
        score += 1
        scoreText.text = 'Pisteet: ' + score
    })

    player.body.velocity.x = 0
    player.body.velocity.y = 0

    muutaSuuntaa()

    platforms.setAll('body.velocity.y', palkinNopeus)
}

function muutaSuuntaa() {
    if (cursors.left.isDown) {
        player.body.velocity.x = pallonNopeus
    } else if (cursors.right.isDown) {
        player.body.velocity.x = -1 * pallonNopeus
    }
}
