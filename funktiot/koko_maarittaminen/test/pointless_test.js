function solution() {
    var lineArray = fileContents('funktiot.js').split(/\n/);
    var solutionEnd = lineArray.indexOf('// LOCK TO END');

    return lineArray.slice(0, solutionEnd).join('\n');
}

describe('Stattiset testit', function() {
    it('Taikasana osataan', function() {
        expect(solution()).to.match(/^[ \t]*function[^\n]*$/m, 'Aloita funktion määrittäminen kirjoittamalla tietyn sanan, joka aloittaa funktion määrittelyn.');
    });

    it('Taikasanan jälkeen ei kirjoiteta sulkeita', function() {
        expect(solution()).not.to.match(/^[ \t]*function[ \t]*\([^\n]*\)[^\n]*$/m, 'Älä kirjoita sulkeita heti function-sanan jälkeen.');
    });

    it('Funktiolle on annettu nimi', function() {
        expect(solution()).to.match(/^[ \t]*function[ \t]*\w+[^\n]*$/m, 'Kirjoita function-sanan jälkeen funktion nimi.');
    });

    it('Funktion nimi on nimi', function() {
        expect(solution()).to.match(/^[ \t]*function[ \t]*nimi[^\n]*$/m, 'Funktion nimen tulee olla nimi, koska sen nimistä funktiota kutsutaan alempana.');
    });

    it('Funktion nimen jälkeen on sulut', function() {
        expect(solution()).to.match(/^[ \t]*function[ \t]*nimi[ \t]*\([^\n]*\)[^\n]*$/m, 'Kirjoita funktion nimen jälkeen sulkeet.');
    });

    it('Sulkujen sisään ei kirjoiteta mitään', function() {
        expect(solution()).not.to.match(/^[ \t]*function[ \t]*nimi[ \t]*\([ \t]*[^ \t]+[ \t]*\)[^\n]*$/m, 'Älä kirjoita funktion määrittelyssä sulkujen sisään mitään.');
    });

    it('Sulkujen jälkeen on aaltosulut', function() {
        expect(solution()).to.match(/^[ \t]*function[ \t]*nimi[ \t]*\([ \t]*\)[ \t]*\{.*$/m, 'Kirjoita funktion määrittelyssä aaltosulkeet {} sulkujen jälkeen.');
    });

    it('Ei tule syntaksivirheitä', function() {
      expect(importingFile('funktiot.js')).not.to.throw(SyntaxError, 'Koodi ei ollut odotetussa muodossa. Muistitko sulkea aaltosulut?');
    });

    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Tehtävässä on jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

describe('Tulostus', function() {

    it('Funktio on luotu', function() {
        eval(fileContents('funktiot.js'));
        expect(nimi).to.be.type('function', 'Nimi-nimistä funktiota ei ollut olemassa');
    });

    it('Funktiossa tulostetaan jotakin', function() {
        var console = {};
        console.log = sinon.spy();
        eval(fileContents('funktiot.js'));
        nimi();
        nimi();
        nimi();
        nimi();
        expect(console.log.callCount > 4).to.equal(true, 'Et tulostanut mitään funktion sisällä. Kirjoita tulostuskomento funktion määrittelyssä olevien aaltosulkujen sisäään');
    });
});
