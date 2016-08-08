it('Vääriä kohtia ei nollata', function() {
    expect(fileContents('variables.js')).to.match(/^[ \t]*var[ \t]*\w*[ \t]*=[ \t]*"Tämä on tärkeä viesti."[ \t]*$/m, 'Älä koske muuttujan luonnissa muuhun kuin muuttujan nimeen. Kannattaa nollata tehtävä ja aloittaa alusta.');
});

it('Muuttujan nimi on oikein', function() {
    expect(fileContents('variables.js')).to.match(/^[ \t]*var[ \t]*tulostettavaMuuttuja[ \t]*=[ \t]*"Tämä on tärkeä viesti."[ \t]*$/m, 'Muuttujan nimessä on yhä kirjoitusvirhe.');
});

it('Koodi kääntyy', function() {
    expect(importingFile('variables.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.');
});
