var highScore = 0;

function bestScore() {
    if (snake.total > /* snake. */highScore) {
        /* snake. */highScore = snake.total;
    }
    return /* snake. */highScore;
}

function End() {
    var gameOver = new Audio("assets/sounds/gameOver.wav");
    gameOver.play();
    document.querySelector(".highScore").innerText = "HighScore: " + bestScore();
    snake.x = 0;
    snake.y = 0;
    snake.xSpeed = 0;
    snake.ySpeed = 0;
    snake.total = 0;
    snake.snakeLength = [];
    console.log("End game called");
    this.gameOver();
    /* return; */
}



function gameOver(){
    canPlay = false; //stop play while gameOver is called.
    document.getElementById('start').classList.toggle('hidden');
    
}
