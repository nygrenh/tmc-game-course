function solution() {
    var lineArray = fileContents('funktiot.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING');
    var solutionEnd = lineArray.indexOf('// LOCK TO END');

    return lineArray.slice(solutionStart, solutionEnd).join('\n');
}

describe('Stattiset testit', function() {

    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(ReferenceError, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt. Oletko varmasti kirjoittanut muuttujan nimen oikein?');
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

    it('Tulostusta kutsutaan', function() {
        eval(fileContents('funktiot.js'));
        expect(console.log.called).to.equal(true, 'Funktiossa ei tulostettu mitään.');
    });

    it('Ei tulosteta useampaan kertaan', function() {
        eval(fileContents('funktiot.js'));
        expect(console.log.callCount < 2).to.equal(true, 'Tehtävässä on tarkoitus tulostaa vain kerran.');
    });

    it('Tulostuksella on argumentti', function() {
        eval(fileContents('funktiot.js'));
        expect(console.log.firstCall.args.length > 0).to.equal(true, 'Tulosta muuttuja funktion ulkopuolelta.');
    });

    it('Tulostus tulostaa muuttujan funktion ulkopuolelta', function() {
        var sisalla = 'väärin';
        var ulkopuolella = 'sssssda33'
        eval(solution());
        expect(console.log.firstCall.args[0]).to.equal(ulkopuolella, 'Vaihda tulostus tulostamaan funktion ulkopuolella määritetty muuttuja.');
    });
});
