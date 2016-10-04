context('Piirtokomennot', function() {
  var vasemmalle;
  var oikealle;
  var ylos;
  var alas;

  beforeEach(function() {
    vasemmalle = sinon.spy();
    oikealle = sinon.spy();
    ylos = sinon.spy();
    alas = sinon.spy();
  });

  it('Neliö on tarpeeksi iso', function() {
    eval(fileContents('piirra.js'));
    lueKomennot();
    expect(oikealle.callCount > 3).to.equal(true, 'Varmista, että olet piirtänyt tarpeeksi suuren neliön.');
  });

  it('Kuvio on neliön muotoinen', function() {
    eval(fileContents('piirra.js'));
    lueKomennot();
    var msg = 'Piirtämäsi kuvio ei ollut neliön muotoinen.';
    expect(vasemmalle.callCount).to.equal(oikealle.callCount, msg);
    expect(ylos.callCount).to.equal(oikealle.callCount, msg);
    expect(alas.callCount).to.equal(oikealle.callCount, msg);
  });
});
