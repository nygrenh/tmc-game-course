function kayttajanKoodi() {
    var lineArray = fileContents('kasvatus.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING');
    var solutionEnd = lineArray.indexOf('// LOCK TO END');

    return lineArray.slice(solutionStart, solutionEnd).join('\n');
}

it('Ratkaisussa ei käytetä varia', function() {
    expect(kayttajanKoodi()).not.to.match(/^[ \t]*var[^\n]*$/m, 'Et tarvitse var-sanaa, kun asetat muuttujaan uutta arvoa.');
});

it('Ratkaisussa on oikean muotoinen', function() {
    expect(kayttajanKoodi()).to.match(/^[ \t]*a[ \t]*=[ \t]*a[ \t]*\*[ \t]*\d*[ \t]*$/m, 'Haluat asettaa a:n arvon olevan a:n nykyinen arvo kerrottuna jollakin luvulla.');
});

it('Koodi kääntyy', function() {
    expect(importingFile('uusi.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Tulos on oikea', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('kasvatus.js'));
    var msg = console.log.lastCall.args[0];
    expect(msg).to.equal(1143188, 'Muuttujan a arvo ei ollut #{exp} vaan se oli: #{act}.');
});
