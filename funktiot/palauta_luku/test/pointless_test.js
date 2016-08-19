describe('Stattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
    });
});

describe('Dynaamiset testit', function() {
  it('Funktio palautaa argumenttinsa', function() {
      eval(fileContents('funktiot.js'));
      var uniikkiNumero = 232188223;
      expect(palautaLuku(uniikkiNumero)).to.equal(uniikkiNumero, 'Funktio ei palauttanut argumenttina annettua numeroa.');
  });
});
