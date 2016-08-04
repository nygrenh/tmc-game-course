it('Koodi kääntyy', function() {
    expect(importingFile('ehdot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
});

it('Ehto on tosi', function() {
    var virheViesti = 'Ehto ei toteutunut.'
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('ehdot.js'));
    var kutsu = console.log.firstCall;
    expect(kutsu).not.to.equal(null, virheViesti);
    expect(console.log.firstCall.args[0]).to.equal('Totta', virheViesti);
});

it('Ei olla käytetty avainsanaa true', function() {
    expect(fileContents('ehdot.js')).not.to.match(/^[ \t]*if[ \t]*\([ \t]*true[ \t]*\)/m, 'Vaikka true on tosi ehto, muodosta tässä tehtävässä ehto vertailuilla.')
});
