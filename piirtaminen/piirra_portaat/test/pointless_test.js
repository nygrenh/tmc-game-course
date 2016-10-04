context('Piirtokomennot', function() {
  var palat;
  var vasemmalle = function() {
    palat.push('v');
  };
  var oikealle = function() {
    palat.push('o');
  };
  var ylos = function() {
    palat.push('y');
  };
  var alas = function() {
    palat.push('a');
  };

  beforeEach(function() {
    palat = [];
  });

  it('Kuvio on oikean muotoinen', function() {
    eval(fileContents('piirra.js'));
    lueKomennot();
    expect(palat).to.deep.equal(['y', 'y', 'o', 'o', 'y', 'y', 'o', 'o', 'y', 'y', 'o', 'o', 'y', 'y', 'o', 'o'], 'Varmista, että piirtämäsi kuva näyttää täsmälleen oikealta.');
  });
});
