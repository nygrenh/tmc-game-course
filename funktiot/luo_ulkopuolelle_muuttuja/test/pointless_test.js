function solution() {
    var lineArray = fileContents('funktiot.js').split(/\n/);
    var solutionEnd = lineArray.indexOf('// LOCK TO END');

    return lineArray.slice(0, solutionEnd).join('\n');
}

describe('Stattiset testit', function() {

    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(ReferenceError, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt. Oletko varmasti luonut muuttujan x funktion ulkopuolelle?');
    });

    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

describe('Tulostus', function() {
    var console;

    beforeEach(function() {
        console = {};
        console.log = sinon.spy();
    });

    it('Muuttujan arvo on oikea', function() {
        eval(solution());
        expect(x).to.equal(100, 'Muuttujan x arvo ei ollut oikea.');
    });
});
