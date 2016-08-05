function kayttajanKoodi() {
    var lineArray = fileContents('yhdistele.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING');

    return lineArray.slice(solutionStart).join('\n');
}

describe('Yleiset testit', function() {
    it('Muuttujan alustuksen alkuun ei kosketa', function() {
        expect(fileContents('yhdistele.js')).to.match(/^[\ \t]*var[\ \t]*yhdistetty[\ \t]*=/m, 'Älä koske muuttujan luomiseen vaan aseta sille vain arvo.')
    });

    it('a:n arvoa ei aseteta uudestaan', function() {
        expect(kayttajanKoodi()).not.to.match(/^[^\n]*\ba\b[ \t]* =/m, 'Älä aseta muuttujan a arvoa uudeksi. Sinun on tarkoitus käyttää a:ta vain lauseen yhdistelyssä.')
    });

    it('b:n arvoa ei aseteta uudestaan', function() {
        expect(kayttajanKoodi()).not.to.match(/^[^\n]*\bb\b[ \t]* =/m, 'Älä aseta muuttujan b arvoa uudeksi. Sinun on tarkoitus käyttää b:ta vain lauseen yhdistelyssä.')
    });

    it('Uusia muuttujia ei luoda', function() {
        expect(kayttajanKoodi()).not.to.match(/^[^\n"']*\bvar\b[ \t]*[^ \ty]/m, 'Älä luo uusia muuttujia. Käytä vain muuttujaa yhdistetty.')
    });
});

describe('Rivi, jolla muuttuja luodaan', function() {
    var rivi;

    beforeEach(function() {
        var lines = fileContents('yhdistele.js').split(/\n/);
        rivi = lines.filter(function(o) { return /[\ \t]*var[\ \t]*yhdistetty[\ \t]*=/m.test(o); })[0];
    });

    it('Tehtävään kirjoitetaan jotakin', function() {
        expect(rivi).not.to.match(/^[\ \t]*var[\ \t]*yhdistetty[\ \t]*=[\ \t]*$/m, 'Kirjoita yhdistely tehtävään.');
    });

    it('Käytetään vain sallittuja muuttujia', function() {
        expect(rivi).to.match(/^[\ \t]*var[\ \t]*yhdistetty[\ \t]*=[\ \t]*[ab\(\)]+[ab\+\ \t\(\)]*[\ \t]*$/m, 'Saat käytttää yhdistelyyn vain muuttujia a ja b.');
    });
});

describe('Oikeellisuus', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('yhdistele.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
    });

    it('Yhdistetty lause on oikea', function() {
        var console = {};
        var spy = console.log = sinon.spy();
        eval(fileContents('yhdistele.js'));
        expect(spy.firstCall.args[0].trim()).to.equal("Tänään kävin kaupassa", "Yhdistelyn tulos ei ollut oikea. Lauseen piti olla #{exp}, mutta ohjelmasi tulosti: #{act}.");
    });
});
