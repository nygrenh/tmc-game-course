describe('Staattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('ehdot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

describe('Dynaamiset testit', function() {
    var koodi;
    var console;
    beforeEach(function() {
        koodi = fileContents('ehdot.js').split('\n').slice(1).join('\n');
        console = {};
        console.log = sinon.spy();
    });


    it('Ei else-haaraa, kun kun a on pienempi kuin 1', function() {
        var a = 0;
        eval(koodi);
        var tuloste = console.log.lastCall.args[0];
        expect(tuloste).to.equal('Totta', 'Kirjoittamasi tuloste tulostettiin silloinkin kun ei pitänyt.');
    });

    it('On käytetty sanaa else', function() {
        expect(koodi).to.match(/else/, 'Oletko luonut else-haaran?');
    })

    it('Else-haara tulostaa jotakin', function() {
        var a = 5;
        eval(koodi);
        expect(console.log.called).to.equal(true, 'Else-haarassa ei tulostettu mitään. Varmista, että olet luonut else-haaran ja tulostat siellä jotakin.');
    });
});
