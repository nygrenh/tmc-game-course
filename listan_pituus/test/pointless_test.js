describe('Stattiset testit', function() {
    it('Ei tulosteta vastausta suoraan', function() {
        expect(fileContents('listat.js')).not.to.match(/^[ \t]*console.log[ \t]*([ \t]*[^\n]*\d+[^\n]*[ \t]*)[ \t]*$/m, 'Älä yritä tulostaa vastausta suoraan vaan selvitä listan pituus materiaalisssa esitetyllä tavalla.')
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
        expect(a).to.equal(497, 'Väitit listassa olevan #{act} alkiota, mutta se ei ole oikea vastaus');
    });
});
