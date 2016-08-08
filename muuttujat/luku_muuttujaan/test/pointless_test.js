function kayttajanKoodi() {
    var lineArray = fileContents('lasku.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING');

    return lineArray.slice(solutionStart).join('\n');
}

it('a:n arvoa ei aseteta uudestaan', function() {
    expect(kayttajanKoodi()).not.to.match(/^[^\n]*\ba\b[ \t]* =/m, 'Älä aseta muuttujan a arvoa uudeksi. Sinun on tarkoitus käyttää a:ta vain laskutoimituksessa.')
});

it('Uusia muuttujia ei luoda', function() {
    expect(kayttajanKoodi()).not.to.match(/^[^\n"']*\bvar\b[ \t]*/m, 'Älä luo uusia muuttujia. Käytä vain muuttujia, jotka ovat valmiina tehtäväpohjassa.')
});

it('Vastausta ei tulosteta suoraan', function() {
    expect(fileContents('lasku.js')).not.to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*45[\ \t]*\)[\ \t]*$/m, 'Älä tulosta vastausta suoraan vaan tee laskutoimitus a * luku.');
});

it('Ei käytetä merkkijonoja', function() {
    expect(fileContents('lasku.js')).to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*[^\n"']*[\ \t]*\)[\ \t]*$/m, 'Tässä tehtävässä lasketaan numeroilla. Et tarvitse merkkijonoja mihinkään.');
});

it('Vain oikeaa asiaa muutetaan', function() {
    expect(fileContents('lasku.js')).to.match(/^[ \t]*console.log[ \t]*\([ \t]*a[ \t]*\*[ \t]*\d+[ \t]*\)[ \t]*$/m, 'Muuta vain kertomerkin oikealla puolella olevaa numeroa.');
});

it('Koodi kääntyy', function() {
    expect(importingFile('variables.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Tulos on oikea', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('lasku.js'));
    var msg = console.log.lastCall.args[0];
    expect(msg).to.equal(45, 'Tulos ei ollut #{exp} vaan se oli: #{act}.');
});
