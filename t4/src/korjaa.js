var pallonNopeus = 250;
var palkinNopeus = -50;

function muutaSuuntaa() {
  if (cursors.left.isDown) {
      player.body.velocity.x = pallonNopeus;
  } else if (cursors.right.isDown) {
      player.body.velocity.x = -1 * pallonNopeus;
  }
}
