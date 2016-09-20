function solution() {
    var lineArray = fileContents('funktiot.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING')

    return lineArray.slice(solutionStart).join('\n');
}

function evalSolution() {
    eval(solution);
}

describe('Dynaamiset testit', function() {
    var tulostaViesti;
    var huippuSalaisuus;
    beforeEach(function() {
        tulostaViesti = sinon.spy();
        huippuSalaisuus = "########---...huippusalaisuus&";
    });

    it('Käyttäjän kirjoittama koodi kääntyy', function() {
        expect(evalSolution).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
    });

    it('Funktiota kutsutaan', function() {
        eval(solution());
        expect(tulostaViesti.called).to.equal(true, 'Et kutsunut tehtäväpohjassa olevaa funktiota.');
    });

    it('Funktiolle annetaan yksi argumentti', function() {
        eval(solution());
        expect(tulostaViesti.firstCall.args.length).to.equal(1, 'Funktiota tulee kutsua yhdellä argumentilla. Kutsuit funktiota #{act} argumentilla.')
    });

    it('Funktiota kutsutaan ', function() {
        eval(solution());
        expect(tulostaViesti.firstCall.args[0]).to.be.type('String', 'Et kutsunut funktiota merkkijonolla.');
    });

    it('Funktiota kutsutaan juuri tehtäväpohjassa annetulla argumentilla', function() {
        eval(solution());
        expect(tulostaViesti.firstCall.args[0]).to.equal(huippuSalaisuus, 'Et kutsunut funktiota tehtäväpohjassa valmiiksi määritellyllä muuttujalla.');
    });
});

describe('Stattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
    });
});
