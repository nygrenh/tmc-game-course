describe('Stattiset testit', function() {
    it('Funktion nimi on kirjoitettu', function() {
        expect(fileContents('funktiot.js')).to.match(/^[ \t]*tulosta[^\n]*$/m, 'Kirjoita aluksi funktion nimi. Funktion nimi lukee tehtäväpohjassa olevassa funktion määrittelyssä. Katso yläpuolella olevasta materiaalista, miten saat funktion määrittelystä funktion nimen.');
    });

    it('Funktiolle sanotaan, että sitä halutaan kutsua', function() {
        expect(fileContents('funktiot.js')).to.match(/^[ \t]*tulosta[ \t]*\([ \t]*\)[ \t]*$/m, 'Kirjoita funktion nimen perään sulut (), jotka merkitsevät että haluat kutsua tämän nimistä funktiota.');
    });

    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

describe('Tulostus', function() {
    var tulosta, solution;

    beforeEach(function() {
        tulosta = sinon.spy();
        var lineArray = fileContents('funktiot.js').split(/\n/);
        var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING')

        solution = lineArray.slice(solutionStart).join('\n');
    });

    it('Funktiota on kutsuttu', function() {
        eval(solution);
        expect(tulosta.called).to.equal(true, 'Et kutsunut funktiota');
    });

    it('Funktiota kutsutaan 5 kertaa', function() {
        eval(solution);
        expect(tulosta.callCount).to.equal(5, 'Sinun täytyy kutsua funktiota #{exp} kertaa.')
    });
});
