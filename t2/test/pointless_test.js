it('Osaa taikasananan', function() {
    expect(fileContents('variables.js')).to.match(/^\s*(var|let|const)/m, 'Muuttujat luodaan eräällä tietyllä sanalla.');
});

it('Osaa antaa muuttujalle nimen', function() {
    expect(fileContents('variables.js')).to.match(/^\s*(var|let|const)\s+\w+/m, 'Käytät oikeaa sanaa muuttujan luomiseen. Et ole kuitenkaan antanut sille nimeä.');
});

it('Antaa muuttujalla oikean nimen', function() {
    expect(fileContents('variables.js')).to.match(/^\s*(var|let|const)\s+etunimi/m, 'Muuttujan nimi täytyy olla etunimi. Varmista että olet kirjoittanut nimen täsmälleen oikein.');
});

it('Kirjoittaa asettamismerkin', function() {
    expect(fileContents('variables.js')).to.match(/^\s*(var|let|const)\s+etunimi\s+=/m, 'Olet luomassa muuttujaa etunimi, mutta et ole asettanut siihen mitään arvoa. Millä merkillä asetetaan muuttujaan arvo?');
});

it('Muuttujaan yritetää asettaa jotakin', function() {
    expect(fileContents('variables.js')).to.match(/^\s*(var|let|const)\s+etunimi\s*=\s*[\w"']+/m, 'Ilmaisit haluavasi asettaa muuttujaan jotakin, mutta et kertonut mitä. Kirjoita oma nimesi merkkijonona asettamismerkin jälkeen.');
});

it('Muuttujaan asetetaan merkkijono', function() {
    expect(fileContents('variables.js')).to.match(/^\s*(var|let|const)\s+etunimi\s*=\s*["']\w*["']/m, 'Kun asetat muuttujaan nimesi, sinun täytyy kertoa että nimi on merkkijono. Tämä ilmaistaan tietyillä merkeillä sanan ympärillä. Katso mallia esimerkistä ja varmista että olet kirjoittanut nimesi oikealla tavalla');
});

it('Muuttujaan asetetaan merkkijono, joka ei ole tyhjä', function() {
    expect(fileContents('variables.js')).to.match(/^\s*(var|let|const)\s+etunimi\s*=\s*["']\w+["']/m, 'Olet asettanut muuttujaan merkkijonon. Nyt kirjoita nimesi siihen.');
});

it('Ei tule virheitä', function() {
    expect(importingFile('variables.js')).not.to.throw(Error, 'Koodissasi on kirjoitusvirhe. Varmista, että olet kirjoittanut kaiken täsmälleen oikein.')
});

it('Ohjelma toimii niin kuin pitäisi', function() {
    eval(fileContents('variables.js'));
    expect(etunimi).to.match(/[A-z]/, 'Varmista, että olet asettanut muuttujaan etunimi etunimesi.');
});
