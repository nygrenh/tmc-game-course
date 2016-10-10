function solution() {
    var lineArray = fileContents('toisto.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING')

    return lineArray.slice(solutionStart).join('\n');
}

function evalSolution() {
    eval(solution);
}

context('Staattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('toisto.js')).not.to.throw(Error, 'Tehtävässä oli jotakin, mitä tietokone ei ymmärtänyt. Annoitko toistettavan funktion forEachille?');
    });
});

context('Vastaus', function() {
    var lista, toistettavaFunktio;

    beforeEach(function() {
        lista = [];
        for(var i = 0; i < 245; i++) {
            lista.push('');
        }
        toistettavaFunktio = sinon.spy();
    });

    it('Funktiota toistetaan oikea määrä', function() {
        eval(solution());
        expect(toistettavaFunktio.callCount).to.eq(245, 'Toistitko varmasti funktiota jokaiselle taulukon alkiolle.');
    });
});
