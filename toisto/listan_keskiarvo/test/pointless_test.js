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
        expect(Math.abs(keskiarvo - 18.06756756756757) < 0.00001).to.equal(true, 'Listan keskiarvo ei ollut oikea.');
    });
});
