describe('Stattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
    });
});

describe('Dynaamiset testit', function() {
  it('Funktio palautaa kolmannen potenssin', function() {
      eval(fileContents('funktiot.js'));
      expect(kolmasPotenssi(121)).to.equal(1771561, 'Funktio ei palauttanut luvun kolmatta potenssia.');
  });
});
