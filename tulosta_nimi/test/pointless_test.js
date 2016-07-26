var consoleLogRegex = /^\s*console\.log/m;

it('Tulostusta ei ole kirjoitettu kommentin sisään', function() {
    if (!consoleLogRegex.test(fileContents('nimi.js'))) {
        expect(fileContents('nimi.js')).to.not.match(/^\s*\/\/\s*cons/m, 'Kirjoitit tulostuskomennon kommentin sisään. Poista rivin alusta kommenttimerkintä "//".');
    }
});

it('Osaa taikasananan', function() {
    expect(fileContents('nimi.js')).to.match(consoleLogRegex, 'Et ole kirjoittanut tulostuskomentoa. Katso yllä olevista esimerkistä mallia ja varmista, että olet kirjoittanut komennon täsmälleen oikein.');
});

it('Osaa kirjoittaa sulut argumenteille', function() {
   expect(fileContents('nimi.js')).to.match(/^\s*console\.log\s*\(.*\)/g, 'Tulostuskomennon jälkeen sinulla täytyy olla sulut, jonka sisällä kerrot mitä haluat tulostaa.');
});

it('Argumentiksi on annettu jotakin', function() {
   expect(fileContents('nimi.js')).to.not.match(/^\s*console\.log\s*\(\s*\)/g, 'Olet kirjoittanut tulostuskomennon oikein. Nyt laita se tulostamaan nimesi.');
});


it('Argumentiksi annetaan merkkijono', function() {
   expect(fileContents('nimi.js')).to.match(/^\s*console\.log\s*\(\s*["'].*["']\s*\)/g, 'Haluat tulostaa merkkijonon. Jotta tietokone ymmärtäisi nimesi olevan merkkijono, joudut laittamaan sen ympärille tietyt merkit. Varmista, että olet kirjoittanut kaiken täsmälleen oikein.');
});

it('Merkkijono ei ole tyhjä', function() {
   expect(fileContents('nimi.js')).not.to.match(/^\s*console\.log\s*\(\s*["']\s*["']\s*\)/g, 'Kirjoita nimesi merkkijonoon.');
});

it('Ei tule virheitä', function() {
    expect(importingFile('nimi.js')).to.not.throw(Error, 'Koodissasi on kirjoitusvirhe. Varmista, että olet kirjoittanut kaiken täsmälleen oikein.')
});

it('Tulostuskomentoa on kutsuttu', function() {
    var console = {};
    console.log = sinon.spy();

    eval(fileContents('nimi.js'));

    expect(console.log.called).to.equal(true, 'Tulostuskomentoa ei kutsuttu. Varmista että olet kirjoittanut kaiken oikein.');
});

it('Tulostuskomentoa on kutsuttu merkkijonolla', function() {
    var console = {};
    console.log = sinon.spy();

    eval(fileContents('nimi.js'));

    expect(console.log.firstCall.args[0]).to.be.type('string', 'Tulostuskomentoa ei kutsuttu merkkijonolla. Varmista, että olet kirjoittanut kaiken oikein.');
});
