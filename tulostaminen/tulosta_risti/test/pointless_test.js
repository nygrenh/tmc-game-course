describe('Koodin muoto', function(){
    it('Tulostuskomento kirjoitetaan', function() {
        expect(fileContents('risti.js')).to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*[^\n]*[\ \t]*\)[\ \t;]*$/m, 'Et voi tulostaa kuviota ilman tulostuskomentoa.')
    });

    it('Tulostetaan merkkijono', function() {
        expect(fileContents('risti.js')).not.to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*[^'"]+[\ \t]*\)[\ \t]*$/m, 'Muista käyttää tulostuksessa merkkijonon merkkejä.');
    });

    it('Koodi kääntyy', function() {
        expect(importingFile('risti.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt');
    });
});

describe('Tulostus', function() {
    var console;

    beforeEach(function() {
        console = {};
        console.log = sinon.spy();
    });

    it('Tulostuskomentoa on kutsuttu', function() {
        eval(fileContents('risti.js'));
        expect(console.log.called).to.equal(true, 'Et kutsunut tulostuskomentoa.');
    });

    it('Ensimmäisellä rivillä on oikea merkki', function() {
        eval(fileContents('risti.js'));
        expect(console.log.firstCall.args[0]).to.match(/^\ *#[\ \t]*$/m, 'Mistä merkistä ensimmäinen rivi muodostuu?');
    });
    it('Ensimmäisellä rivillä on tarpeeksi välilyöntejä', function() {
        eval(fileContents('risti.js'));
        expect(console.log.firstCall.args[0]).to.match(/^\ #[\ \t]*$/m, 'Varmista, että olet laittanut oikean määrän välilyöntejä ensimmäisen rivin alkuun.');
    });

    it('Tulostettu kaksi riviä', function() {
        eval(fileContents('risti.js'));
        expect(console.log.callCount >= 2).to.equal(true, 'Kirjoita seuraavaksi toisen rivin tulostus.');
    });

    it('Toinen rivi on oikea', function() {
        eval(fileContents('risti.js'));
       expect(console.log.getCall(1).args[0]).to.match(/^###[\ \t]*$/m, 'Varmista, että tulostat toisen rivin oikein.')
    });

    it('Tulostettu kolme', function() {
        eval(fileContents('risti.js'));
        expect(console.log.callCount == 3).to.equal(true, 'Sinun täytyy tulostaa yhteensä kolme riviä.');
    });

    it('Kolmas rivi on oikea', function() {
        eval(fileContents('risti.js'));
       expect(console.log.getCall(2).args[0]).to.match(/^\ #[\ \t]*$/m, 'Varmista, että tulostat kolmannen rivin oikein.')
    });
});
