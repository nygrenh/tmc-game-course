function solution() {
    var lineArray = fileContents('funktiot.js').split(/\n/);
    var solutionEnd = lineArray.indexOf('// Funkiota kutsutaan, mutta miksi se ei toimi?')

    return lineArray.slice(0, solutionEnd).join('\n');
}

function end() {
    var lineArray = fileContents('funktiot.js').split(/\n/);
    var endStart = lineArray.indexOf('// Funkiota kutsutaan, mutta miksi se ei toimi?')

    return lineArray.slice(endStart).join('\n');
}

describe('Stattiset testit', function() {
    it('Määrittämisen vääriin osiin ei kosketa', function() {
        expect(solution()).to.match(/^[ \t]*function[ \t]+\w+\([ \t]*\)[ \t]*{[ \t]*$/m, 'Älä koske funktion määrittämisessä muuhun kuin funktion nimeen. Tässä vaihessa kannattaa nollata tehtävä ja aloittaa alusta.');
    });

    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Tehtävässä on jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

describe('Tulostus', function() {
    var oikeaNimi;

    beforeEach(function() {
        oikeaNimi = sinon.spy();
    });

    it('Funktiota on kutsuttu', function() {
        eval(end());
        expect(oikeaNimi.called).to.equal(true, 'Oikean nimistä funktiota ei kutsuttu.');
    });
});
