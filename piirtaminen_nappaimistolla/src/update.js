function update() {
  lueSuunta();
}

function lueSuunta() {
  if (näppäimet.right.isDown) {
    liiku('oikealle');
  } if (näppäimet.left.isDown) {
    liiku('vasemmalle');
  }
  if (näppäimet.up.isDown) {
    liiku('ylös');
  }
  if (näppäimet.down.isDown) {
    liiku('alas');
  }
}

function liiku(suunta) {
  var madonPää = mato[0];

  var x;
  var y;
  if (suunta === 'oikealle') {
    x = madonPää.x + ruudunKoko;
    y = madonPää.y;
  } else if (suunta === 'vasemmalle') {
    x = madonPää.x - ruudunKoko;
    y = madonPää.y;
  } else if (suunta === 'ylös') {
    x = madonPää.x;
    y = madonPää.y - ruudunKoko;
  } else if (suunta === 'alas') {
    x = madonPää.x;
    y = madonPää.y + ruudunKoko;
  }
  mato.unshift(game.add.sprite(x, y, 'mato'));
  siirrotTekstinä.text = 'Siirtoja: ' + (mato.length - 1);
}
