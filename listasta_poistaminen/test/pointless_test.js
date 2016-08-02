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

    it('Tulostettu lista on oikea', function() {
        eval(fileContents('listat.js'));
        var a = console.log.firstCall.args[0];
        expect(a).to.deep.equal([5, 2], 'Listan sisältö ei ollut oikea. Varmista, että tulostus on tehtäväannon mukainen.');
    });

    // TODO: test if shift|pop had any arguments
});
