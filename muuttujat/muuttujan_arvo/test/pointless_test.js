it('Vääriä kohtia ei nollata', function() {
    expect(fileContents('variables.js')).to.match(/^[ \t]*var[ \t]*salainenViesti[ \t]*=[ \t]*["'][^\n]*["']$/m, 'Älä koske muuttujan luonnissa muuhun kuin lainausmerkkien sisällä olevaan tekstiin. Kannattaa nollata tehtävä ja aloittaa alusta.');
});

it('Koodi kääntyy', function() {
    expect(importingFile('variables.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});

it('Viesti on oikea', function() {
    var console = {};
    console.log = sinon.spy();
    eval(fileContents('variables.js'));
    var msg = console.log.lastCall.args[0];
    expect(msg.trim()).to.equal('Ave Caesar!', 'Viesti ei ollut #{exp} vaan se oli: #{act}.');
});
