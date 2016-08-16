describe('Stattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('listat.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });

    it('Papukaijaa ei kirjoiteta suoraan koodiin', function() {
        expect(fileContents('listat.js')).not.to.match(/^var[^\n]+\[[^\n]*[Pp]apukaija[^\n]*$/m, 'Älä kirjoita papukaijaa suoraan listan sisään. Laita listaan vain tehtävän alussa määriteltyjä muuttujia.')
    });

    it('Numeroita ei kirjoiteta suoraan koodiin', function() {
        expect(fileContents('listat.js')).not.to.match(/^var[^\n]+\[[^\n]*\d[^\n]*$/m, 'Älä laita numeroita listan sisään. Laita listaan vain tehtävän alussa määriteltyjä muuttujia.')
    });
});

describe('Tulostus', function() {
    var console;

    beforeEach(function() {
        console = {};
        console.log = sinon.spy();
    });

    it('Tulostusta on kutsuttu listalla', function() {
        eval(fileContents('listat.js'));
        var a = console.log.lastCall.args[0];
        expect(a).to.be.type('Array', 'Muuttuja lista ei ollut lista. Varmista, että muuttujan määrittelyssä on merkit [] sisällön ympärillä.');
    });

    it('Tulostettu lista on oikea', function() {
        eval(fileContents('listat.js'));
        var a = console.log.lastCall.args[0];
        expect(a).to.deep.equal(["Papukaija", 22], 'Listan sisältö ei ollut oikea. Varmista että tulostus on täsmälleen samanlainen kun tehtävänannon esimerkki.')
    });
});
