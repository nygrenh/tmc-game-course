function kayttajanKoodi() {
    var lineArray = fileContents('uusi.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING');
    var solutionEnd = lineArray.indexOf('// LOCK TO END');

    return lineArray.slice(solutionStart, solutionEnd).join('\n');
}

it('Ratkaisussa ei käytetä varia', function() {
    expect(kayttajanKoodi()).not.to.match(/^[ \t]*var[^\n]*$/m, 'Et tarvitse var-sanaa, kun asetat muuttujaan uutta arvoa.');
});

it('Koodi kääntyy', function() {
    expect(importingFile('uusi.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Tulos on oikea', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('uusi.js'));
    var msg = console.log.lastCall.args[0];
    expect(msg).to.match(/Paras numero on +7/, 'Tulostus ei ollut oikea');
});
