describe('Stattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

describe('Tulostus', function() {
    var eka, toka, solution;

    beforeEach(function() {
        eka = sinon.spy();
        toka = sinon.spy();
        var lineArray = fileContents('funktiot.js').split(/\n/);
        var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING');

        solution = lineArray.slice(solutionStart).join('\n');
    });

    it('Ensimmäistä funktiota on kutsuttu', function() {
        eval(solution);
        expect(eka.called).to.equal(true, 'Et kutsunut ensimmäistä funktiota.');
    });

    it('Toista funktiota on kutsuttu', function() {
        eval(solution);
        expect(toka.called).to.equal(true, 'Et kutsunut toista funktiota.');
    });
});
