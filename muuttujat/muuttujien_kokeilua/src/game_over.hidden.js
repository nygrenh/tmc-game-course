var gameOver = {
    create : function() {
        game.add.text(190, 150, "Peli on päättynyt.", { font: "bold 42px sans-serif", fill: "#fff", align: "center"})
        game.add.text(337, 350, "Pisteesi: " + score, { font: "bold 20px sans-serif", fill: "#fff", align: "center"})
    }
}

game.state.add('game_over', gameOver)
// LOCK FROM BEGINNING
