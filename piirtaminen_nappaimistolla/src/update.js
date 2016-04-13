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
  var edellinenPala = palat[0];

  var x;
  var y;
  if (suunta === 'oikealle') {
    x = edellinenPala.x + ruudunKoko;
    y = edellinenPala.y;
  } else if (suunta === 'vasemmalle') {
    x = edellinenPala.x - ruudunKoko;
    y = edellinenPala.y;
  } else if (suunta === 'ylös') {
    x = edellinenPala.x;
    y = edellinenPala.y - ruudunKoko;
  } else if (suunta === 'alas') {
    x = edellinenPala.x;
    y = edellinenPala.y + ruudunKoko;
  }
  var uusiPala = game.add.sprite(x, y, 'pala');
  uusiPala.scale.setTo(skaala, skaala);
  palat.unshift(uusiPala);
  siirrotTekstinä.text = 'Siirtoja: ' + (palat.length - 1);
}
