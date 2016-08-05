describe('Stattiset testit', function() {
    it('Popille ei anneta argumentteja', function() {
        expect(fileContents('listat.js')).not.to.match(/^[^\n]*\.pop[ \t]*\([ \t]*[^\n \t]+[ \t]*\)[^\n]*$/m, 'Kun kutsut poppia, älä laita mitään sulkujen sisään. Pop poistaa aina vain viimeisen asian listasta.');
    });

    it('Shiftille ei anneta argumentteja', function() {
        expect(fileContents('listat.js')).not.to.match(/^[^\n]*\.shift[ \t]*\([ \t]*[^\n \t]+[ \t]*\)[^\n]*$/m, 'Kun kutsut shiftiä, älä laita mitään sulkujen sisään. Shift poistaa aina vain ensimmäisen asian listasta.');
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
    
    it('Tulostettu lista on oikea', function() {
        eval(fileContents('listat.js'));
        var a = console.log.firstCall.args[0];
        expect(a).to.deep.equal([5, 2], 'Listan sisältö ei ollut oikea. Varmista, että tulostus on tehtäväannon mukainen.');
    });
});
