var gameOver = {
    create : function() {
        game.add.text(250, 150, "Game over!", { font: "bold 42px sans-serif", fill: "#36381B", align: "center"});
        game.add.text(300, 350, "Your score: " + pisteet, { font: "bold 20px sans-serif", fill: "#36381B", align: "center"});
    }
};

game.state.add('game_over', gameOver);
