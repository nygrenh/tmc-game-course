describe('Stattiset testit', function() {
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

    it('Tulostusta on kutsuttu listalla', function() {
        eval(fileContents('listat.js'));
        var a = console.log.firstCall.args[0];
        expect(a).to.be.type('Array', 'Muuttuja lista ei ollut lista. Varmista, että muuttujan määrittelyssä on merkit [] sisällön ympärillä.');
    });

    it('Tulostettu lista on oikea', function() {
        eval(fileContents('listat.js'));
        var a = console.log.firstCall.args[0];
        expect(a).to.deep.equal([1, 2, "listat", "ovat", "hauskoja!"], 'Listan sisältö ei ollut oikea. Varmista että tulostus on täsmälleen samanlainen kun tehtävänannon esimerkki.')
    });
});
