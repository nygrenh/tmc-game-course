function solution() {
    var lineArray = fileContents('funktiot.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING');
    var solutionEnd = lineArray.indexOf('// LOCK TO END');

    return lineArray.slice(solutionStart, solutionEnd).join('\n');
}


describe('Stattiset testit', function() {
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

    it('Funktion sisällä tulostetaan', function() {
        eval(solution());
        expect(console.log.called).to.equal(true, 'Et tulostanut mitään funktion sisällä.');
    });
});
