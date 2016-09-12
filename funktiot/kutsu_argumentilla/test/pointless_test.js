function solution() {
    var lineArray = fileContents('funktiot.js').split(/\n/);
    var solutionStart = lineArray.indexOf('// LOCK FROM BEGINNING')

    return lineArray.slice(solutionStart).join('\n');
}

function evalSolution() {
    eval(solution);
}

describe('Dynaamiset testit', function() {
    var kaannaLause;
    beforeEach(function() {
        kaannaLause = sinon.spy();
    });

    it('Käyttäjän kirjoittama koodi kääntyy', function() {
        expect(evalSolution).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
    });

    it('Funktiota kutsutaan', function() {
        eval(solution());
        expect(kaannaLause.called).to.equal(true, 'Et kutsunut funktiota kaannaLause.');
    });

    it('Funktiolle annetaan yksi argumentti', function() {
        eval(solution());
        expect(kaannaLause.firstCall.args.length).to.equal(1, 'Funktiota tulee kutsua yhdellä argumentilla. Kutsuit funktiota #{act} argumentilla.')
    });

    it('Funktiota kutsutaan merkkijonolla', function() {
        eval(solution());
        expect(kaannaLause.firstCall.args[0]).to.be.type('String', 'Et kutsunut funktiota merkkijonolla.');
    });

    it('Merkkijono ei ole tyhjä', function() {
        eval(solution());
        expect(kaannaLause.firstCall.args[0].length > 0).to.equal(true, 'Kirjoita jotakin merkkijonon sisälle.');
    });

    it('Tulokseksi tulee kukkakaalin hinta on nousussa', function() {
        eval(solution());
        expect(kaannaLause.firstCall.args[0].trim().toLowerCase()).to.equal('assusuon no atnih nilaakakkuk', 'Varmista, että kun kutsut funktiota, tulostuu: "Kukkakaalin hinta on nousussa".');
    });
});

describe('Stattiset testit', function() {
    it('Koodi kääntyy', function() {
        expect(importingFile('funktiot.js')).not.to.throw(Error, 'Kirjoitit jotakin, mitä tietokone ei ymmärtänyt.')
    });
});
