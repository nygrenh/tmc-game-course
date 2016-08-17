describe('Stattiset testit', function() {
    it('Muuttuja on luotu', function() {
      expect(importingFile('listat.js')).not.to.throw(ReferenceError, 'Ohjelma yritti käyttää muuttujaa, mitä ei ole olemassa. Oletko varmasti luonut oikeat listat?')
    });

    it('Ruokiin ei kirjoiteta numeroita', function() {
        expect(fileContents('listat.js')).not.to.match(/^var[ \t]+ruuat[^\n]*\d[^\n]*$/m, 'Älä kirjoita ruokien listaan numeroita.');
    });

    it('Väreihin ei kirjoiteta numeroita', function() {
        expect(fileContents('listat.js')).not.to.match(/^var[ \t]+varit[^\n]*\d[^\n]*$/m, 'Älä kirjoita värejen listaan numeroita.');
    });

    it('Koodi kääntyy', function() {
        expect(importingFile('listat.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

describe('Tulostus', function() {
    var console;

    beforeEach(function() {
        console = {};
        console.log = sinon.spy();
    });

    it('Muuttuja ruuat on lista', function() {
        eval(fileContents('listat.js'));
        expect(ruuat).to.be.type('Array', 'Muuttuja ruuat ei ollut lista. Varmista, että muuttujan määrittelyssä on merkit [] sisällön ympärillä.');
    });

    it('Muuttuja varit on lista', function() {
        eval(fileContents('listat.js'));
        expect(varit).to.be.type('Array', 'Muuttuja varit ei ollut lista. Varmista, että muuttujan määrittelyssä on merkit [] sisällön ympärillä.');
    });

    it('Värejä on vähintään 2', function() {
        eval(fileContents('listat.js'));
        expect(varit.length >= 1).to.equal(true, 'Laita värien listaan vähintään yksi väri.');
    });

    it('Ruokia on vähintään 2', function() {
        eval(fileContents('listat.js'));
        expect(ruuat.length >= 2).to.equal(true, 'Laita ruokien listaan vähintään kaksi ruokaa.');
    });
});
