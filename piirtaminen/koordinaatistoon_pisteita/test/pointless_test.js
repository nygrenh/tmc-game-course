it('Koodi kääntyy', function() {
    expect(importingFile('piirra.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt. Varmista että muokkaat vain piirra funktion sisältöä.');
});

context('Piirtalustalla', function() {
    var palat;

    beforeEach(function() {
        palat = [];
    });

    function luoPala(x, y) {
        palat.push([x,y]);
    }

    function compare(a, b) {
        var xDiff = a[0] - b[0];
        var yDiff = a[1] - b[1];
        if (xDiff != 0) {
            return xDiff;
        }
        return yDiff;
    }

    it('Piirtofunktion sisällä ei ole syntaksivirheitä', function() {
        eval(fileContents('piirra.js'));
        expect(piirra).not.to.throw(Error, 'Kirjoitit jotakin piirra-funktioon, mitä tietokone ei ymmärtänyt.');
    })

    it('Paloja asetetaan oikea määrä', function() {
        eval(fileContents('piirra.js'));
        piirra();
        expect(palat.length).to.equal(5, 'Tarvitset kuvion piirtämiseen #{exp} palaa. Olet asettanut #{act} palaa.');
    });

    it('Kuvio on oikea', function() {
        eval(fileContents('piirra.js'));
        piirra();
        var koordinaatit =  palat.sort(compare);
        var start = koordinaatit[0];

        var normalized = koordinaatit.map(function(pala) { return [pala[0] - start[0], pala[1] - start[1]] });
        expect(normalized).to.deep.equal([[0, 0], [0, 2], [1, 2], [2, 0], [2, 2]], 'Piirtämäsi kuvio ei ollut oikea')
    });

});
