it('Koodi kääntyy', function() {
    expect(importingFile('muuttaminen.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Toinen tulostus on oikea', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('muuttaminen.js'));
    var msg = console.log.getCall(1).args[0];
    expect(msg).to.equal('Nyt muuttujan arvo on: 14', 'Varmista, että muutat ensimmäisellä kerralla muuttujan arvoa oikein.');
});

it('Kolmas tulostus on oikea', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('muuttaminen.js'));
    var msg = console.log.getCall(2).args[0];
    expect(msg).to.equal('Lopussa muuttujan arvo on: -437', 'Varmista, että muutat toisella kerralla muuttujan arvoa oikein.');
});
