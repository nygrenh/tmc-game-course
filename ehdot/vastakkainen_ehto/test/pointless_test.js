describe('Ilman a:n määritelmää', function() {
    var koodi;
    var console;
    beforeEach(function() {
        koodi = fileContents('ehdot.js').split('\n').slice(1).join('\n');
        console = {};
        console.log = sinon.spy();
    });

    it('Koodi kääntyy', function() {
        var imported = () => {
          a = 42;
          eval(koodi);
        }
        expect(imported).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });

    it('Oma ehto ei totta kun a on pienempi kuin 42', function() {
        var a = 41;
        eval(koodi);
        var tuloste = console.log.lastCall.args[0];
        expect(tuloste).to.equal('Totta', 'Kirjoittamasi ehdon ei pitäisi olla totta, kun a on pienempi kuin 42.');
    });

    it('Oma ehto ei totta kun a 42', function() {
        var a = 42;
        eval(koodi);
        var tuloste = console.log.lastCall.args[0];
        expect(tuloste).to.equal('Totta', 'Kirjoittamasi ehdon ei pitäisi olla totta, kun a on 42.');
    });

    it('Oma ehto totta kun a on suurempi kuin 42', function() {
        var a = 43;
        eval(koodi);
        var tuloste = console.log.lastCall.args[0];
        expect(tuloste).to.equal('Ei totta', 'Kirjoittamasi ehdon pitäisi olla totta, kun a on suurempi kuin 42.');
    });
});
