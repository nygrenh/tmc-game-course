it('Muuttuja viesti luodaan', function() {
    expect(fileContents('variables.js')).to.match(/^[ \t]*var[ \t]*viesti[ \t]*=[ \t]*["'][^\n]*["']$/m, 'Älä koske muuttujan viesti luonnissa muuhun kuin lainausmerkkien sisällä olevaan tekstiin. Kannattaa nollata tehtävä ja aloittaa alusta.');
});

it('Muuttuja saaTila luodaan', function() {
    expect(fileContents('variables.js')).to.match(/^[ \t]*var[ \t]*viesti[ \t]*=[ \t]*["'][^\n]*["']$/m, 'Älä koske muuttujan saaTila luonnissa muuhun kuin lainausmerkkien sisällä olevaan tekstiin. Kannattaa nollata tehtävä ja aloittaa alusta.');
});

it('Koodi kääntyy', function() {
    expect(importingFile('variables.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Ensimmäinen rivi on oikea', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('variables.js'));
    var msg = console.log.firstCall.args[0];
    expect(msg.trim()).to.equal('Eilen oli poutaista.', 'Ensimmäinen tulostettu rivi ei ollut #{exp} vaan se oli: #{act}.');
});

it('Toinen rivi on oikea', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('variables.js'));
    var msg = console.log.lastCall.args[0];
    expect(msg.trim()).to.equal('Haloo? Ei kuulu mitään!', 'Toinen tulostettu rivi ei ollut #{exp} vaan se oli: #{act}.');
});
