it('Koodi kääntyy', function() {
    expect(importingFile('korjaa.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Rubiinit tippuvat oikeaan suuntaan', function() {
    eval(fileContents('korjaa.js'));
    expect(rubiininNopeus >= 100 ).to.equal(true, 'Rubiinit tippuvat vähäsen hassusti.');
});

it('Pelaaja on tarpeeksi nopea', function() {
    eval(fileContents('korjaa.js'));
    expect(pelaajanNopeus < -100).to.equal(true, 'Pelaaja ei liiku niin kuin pitäisi.');
});
