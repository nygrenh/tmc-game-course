describe('Stattiset testit', function() {
    it('Muuttuja on luotu', function() {
      expect(importingFile('listat.js')).not.to.throw(ReferenceError, 'Ohjelma yritti käyttää muuttujaa, mitä ei ole olemassa. Oletko varmasti luonut listan uusiLista?')
    });
    it('Koodi kääntyy', function() {
        expect(importingFile('listat.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });
});

describe('Tulostus', function() {
    var console;

    beforeEach(function() {
        console = {};
        console.log = sinon.spy();
    });

    it('Tulostusta on kutsuttu listalla', function() {
        eval(fileContents('listat.js'));
        var a = console.log.lastCall.args[0];
        expect(a).to.be.type('Array', 'Muuttuja lista ei ollut lista. Varmista, että muuttujan määrittelyssä on merkit [] sisällön ympärillä.');
    });

    it('Tulostun listan pituus on oikea', function() {
        eval(fileContents('listat.js'));
        var a = console.log.lastCall.args[0];
        expect(a.length).to.equal(3, 'Listassa ei ollut #{exp} alkiota vaan #{act} alkiota.');
    });

    it('Ensimmäinen alkio on numero', function() {
        eval(fileContents('listat.js'));
        var a = console.log.lastCall.args[0];
        expect(a[0]).to.be.type('number', 'Ensimmäinen listan alkio ei ollut numero.');
    });

    it('Toinen alkio on numero', function() {
        eval(fileContents('listat.js'));
        var a = console.log.lastCall.args[0];
        expect(a[1]).to.be.type('number', 'Toinen listan alkio ei ollut numero.');
    });

    it('Kolams alkio on numero', function() {
        eval(fileContents('listat.js'));
        var a = console.log.lastCall.args[0];
        expect(a[2]).to.be.type('number', 'Kolmas listan alkio ei ollut numero.');
    });
});
