it('Koodi kääntyy', function() {
   expect(importingFile('ruutu.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.') ;
});

it('Tulostetaan viisi riviä', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('ruutu.js'));
    expect(console.log.callCount == 5).to.equal(true, 'Joudut tulostamaan viisi riviä.');
});

it('Tulostus on oikea', function() {
   var console = {};
   console.log = sinon.spy();
   eval(fileContents('ruutu.js'));
   var tulostus = console.log.getCalls().map(o => o.args[0]).join('\n');
   expect(tulostus).to.match(/^  x[ \t]*\n xxx[ \t]*\nxxxxx[ \t]*\n xxx[ \t]*\n  x[ \t]*$/m, 'Tulostus ei ollut oikea. Tarkista että olet kirjoittanut kaiken täsmälleen oikein.')
});
