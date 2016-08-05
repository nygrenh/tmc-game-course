it('Muuttujan alustusta ei rikota', function() {
   expect(fileContents('ehdot.js')).to.match(/^[ \t]*var[ \t]*a[ \t]*=[ \t]*/m, 'Älä koske muuttujan luomiseen. Anna rivin alun olla: "var a = " ja muuta vain a:lle asetettavaa arvoa.');
});

it('Koodi kääntyyy', function(){
    expect(importingFile('ehdot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Ehto on totta', function() {
   eval(fileContents('ehdot.js'));
   expect(a < 1).to.equal(true, 'Ehto ei toteutunut. ' + a + ' ei ole pienempi kuin 1.');
});
