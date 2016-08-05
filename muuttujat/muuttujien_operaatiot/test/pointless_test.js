function kayttajanKoodi() {
    var lineArray = fileContents('nimi.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING');

    return lineArray.slice(solutionStart).join('\n');
}

it('Koodi kääntyy', function() {
    expect(importingFile('nimi.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('a:n arvoa ei aseteta uudestaan', function() {
    expect(kayttajanKoodi()).not.to.match(/^[^\n]*\ba\b[ \t]* =/m, 'Älä aseta muuttujan a arvoa uudeksi. Sinun on tarkoitus käyttää a:ta vain laskutoimituksessa.')
});

it('b:n arvoa ei aseteta uudestaan', function() {
    expect(kayttajanKoodi()).not.to.match(/^[^\n]*\bb\b[ \t]* =/m, 'Älä aseta muuttujan b arvoa uudeksi. Sinun on tarkoitus käyttää a:ta vain laskutoimituksessa.')
});

it('Uusia muuttujia ei luoda', function() {
    expect(kayttajanKoodi()).not.to.match(/^[^\n"']*\bvar\b[ \t]*/m, 'Älä luo uusia muuttujia. Käytä vain muuttujia, jotka ovat valmiina tehtäväpohjassa.')
});

it('Tehtävän vastaus tulostetaan', function() {
    expect(fileContents('nimi.js')).to.match(/^[\ \t]*console.log[\ \t]*\([^\n]*\)[\ \t]*$/m, 'Haluat tulostaa vastauksen, jotta näet mitä tuli laskutoimituksen tulokseksi.');
});

it('Tulostuskomento ei ole tyhjä', function() {
    expect(fileContents('nimi.js')).not.to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*\)[\ \t]*$/m, 'Kirjoita laskutoimitus tulostuskomennon sisään.');
});

it('Tulostuskomentoa kutsutaan kerran', function() {
    var console = {};
    console.log = sinon.spy();

    eval(fileContents('nimi.js'));
    expect(console.log.calledOnce).to.equal(true, 'Kutsu tulostuskomentoa vain kerran.');
});

it('Vastausta ei tulosteta suoraan', function() {
    expect(fileContents('nimi.js')).not.to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*30[\ \t]*\)[\ \t]*$/m, 'Älä tulosta vastausta suoraan vaan tee laskutoimitus muuttujilla a ja b.');
});

it('Ei käytetä merkkijonoja', function() {
    expect(fileContents('nimi.js')).to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*[^\n"']*[\ \t]*\)[\ \t]*$/m, 'Tässä tehtässä lasketaan numeroilla. Et tarvitse merkkijonoja mihinkään.');
});

it('Ei käytetä väärää jakomerkkiä', function() {
    expect(fileContents('nimi.js')).not.to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*[^\n]*%[^\n]*[\ \t]*\)[\ \t]*$/m, "Tietokone ei ymmärrä merkkiä '%' jakolaskuksi. Sen sijaan joudut käyttämään merkkiä '/'");
});

it('Laskutoimituksessa ei käytetä numeroita', function() {
    expect(fileContents('nimi.js')).not.to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*[^\n]*\d[^\n]*[\ \t]*\)[\ \t]*$/m, 'Älä käytä numeroita laskuissasi. Käytä muuttujia a ja b.');
});

it('Laskutoimituksia tehdään van sallituilla asioilla', function() {
    expect(fileContents('nimi.js')).to.match(/^[\ \t]*console.log[\ \t]*\([\ \t]*[\ ab\+\-\/\^\*\(\)]+[\ \t]*\)[\ \t]*$/m, 'Saat käyttää vain muuttujia a ja b ja tehdä niiden välillä laskutoimituksia. Käytit laskuissasi väärää merkkiä.');
});

it('Laskutoimituksen tulos on oikea', function() {
    var console = {};
    console.log = sinon.spy();

    eval(fileContents('nimi.js'));
    expect(console.log.getCall(0).args[0]).to.equal(37, 'Laskutoimituksen tulos ei ollut 37.')
});
