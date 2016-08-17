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
        expect(numerot).to.deep.equal([1222], 'Lopullinen lista ei ollut oikea. Varmista, että lisäät poistat listasta oikeat asiat.')
    });
});
