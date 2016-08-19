describe('Stattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
    });
});

describe('Dynaamiset testit', function() {
    var console;
    beforeEach(function() {
        console = {};
        console.log = sinon.spy();
    });

    it('Funktiossa tulostetaan', function() {
        eval(fileContents('funktiot.js'));
        expect(console.log.called).to.equal(true, 'Et tulostanut mitään funktiossa.');
    });

    it('Funktio tulostaa argumentin', function() {
        eval(fileContents('funktiot.js'));
        var arg = '43242-aa';
        tulosta(arg);
        expect(console.log.lastCall.args[0]).to.equal(arg, 'Funktio ei tulostanut argumenttiaan.');
    });
});
