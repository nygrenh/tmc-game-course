it('Koodi kääntyy', function() {
    expect(importingFile('tehtava.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Pelaaja on tarpeeksi nopea', function() {
    eval(fileContents('tehtava.js'));
    expect(pelaajanNopeus >= 400).to.equal(true, 'Pelaaja liikkuu liian hitaasti.');
});

it('Rubiinit tippuvat tarpeeksi hitaasti', function() {
    eval(fileContents('tehtava.js'));
    expect(rubiinejenNopeus <= 500).to.equal(true, 'Rubiinit tippuvat vähäsen liian nopeasti.');
});
