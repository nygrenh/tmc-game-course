context('Staattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('listat.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

context('Dynaamiset testit', function() {
    var console;

    beforeEach(function() {
        console = {};
        console.log = sinon.spy();
    });

    it('Tulostus on oikea', function() {
        eval(fileContents('listat.js'));
        expect(console.log.lastCall.args[0]).to.equal('Listan summa: 1337', 'Listan summa ei ollut oikea.');
    });
});
