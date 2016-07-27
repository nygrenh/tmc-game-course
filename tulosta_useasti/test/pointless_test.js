var alaKirjoitaSamaanViesti = 'Älä kirjoita molempien rivien tulostuksia samaan komentoon vaan kirjoita kaksi tulostuskomentoa.';

it('Tulostuksia ei ole laitettu samaan komentoon välilyönneillä erotettuina', function() {
    expect(fileContents('tulosta.js')).to.not.match(/^\s*console\.log\ *\(\ *["'].*["']\ *["'].*["']\s*\)\ *$/m, alaKirjoitaSamaanViesti)
});

it('Yritetään tulostaa vaan merkkijonoja', function() {
    expect(fileContents('tulosta.js')).not.to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*[^\n'"]+[\ \t]*\)[\ \t]*$/m, 'Varmista, että tulostat vain merkkijonoja. Katso materiaalista miten merkkijonoja merkitään.')
})

it('Koodi kääntyy', function() {
    expect(importingFile('tulosta.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
});

it('Koodia ei onelinetä', function() {
    expect(fileContents('tulosta.js')).not.to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*["'][^\n'"]*\\n[^\n'"]*["'][\ \t]*\)[\ \t]*$/m, 'Vaikka rivinvaihdon luominen merkinnällä "\\n" on periaattessa toimiva ratkaisu, tässä tehtävässä vaadimme kahden tulostuskomennon käyttöä.')
})

context('Valetulostajan kanssa', function() {
    var console;

    beforeEach(function() {
        console = {};
        console.log = sinon.spy();
    });

    it('Tulostuskomentoa on kustuttu', function() {
        eval(fileContents('tulosta.js'));
        expect(console.log.called).to.equal(true, 'Et ole kirjoittanut tulostuskomentoa.');
    });

    it('Tulostuskomentoa on kustuttu kahdesti', function() {
        eval(fileContents('tulosta.js'));
        expect(console.log.calledTwice).to.equal(true, 'Tulostat yhden rivin. Miten saat tulostettua kaksi?');
    });

    it('Ensimmäiselle tulostuskomennolle annetaan vain yksi argumentti', function() {
        eval(fileContents('tulosta.js'));
        expect(console.log.getCall(0).args.length).to.equal(1, alaKirjoitaSamaanViesti)
    });

    it('Ensimmäisen rivin tulostus on oikea', function() {
        eval(fileContents('tulosta.js'));
        expect(console.log.firstCall.args[0].trim()).to.equal('Hei maailma!', 'Ensimmäinen tulostettu rivi ei ole oikea. Sen olisi pitänyt olla: #{exp}, mutta tulostit: #{act}.');
    });

    it('Toisen rivin tulostus on oikea', function() {
        eval(fileContents('tulosta.js'));
        expect(console.log.getCall(1).args[0].trim()).to.equal('(Ja kaikki sen ihmiset)', 'Toinen tulostettu rivi ei ole oikea. Sen olisi pitänyt olla: #{exp}, mutta tulostit: #{act}.');
    });
});
