//Variables

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
/* ctx.canvas.width  = 300;
ctx.canvas.height  = 300; */
const scale = 20;
const rows = canvas.height / scale;
const colums = canvas.width / scale;
var snake;
var canPlay = false; //flag for play or not
var interval;

// setup function



function setup(time) {
    canPlay = true;
    snake = new Snake(); //initialize snake
    mouse = new Mouse(); //initialize food
    mouse.mouseLocation(); //calling mouse position
    

    

    console.log(interval); //check for interval, if exists, clear it to refresh game.
    if(interval){
        window.clearInterval(interval);
    }

    interval = window.setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //remove trail behind snake
        snake.update(); //calling update function on snake
        snake.draw(); //draw the snake on canvas
        mouse.draw(); //draw the mouse on canvas

        if (snake.eat(mouse)) {
            mouse.mouseLocation(); //each time it eats pick a new location
        }



        snake.eatItself(); //checking if snakes eats itself
        document.querySelector(".score").innerText = "Score: " + snake.total; //push total to score on page
        
        

    }, time); //250ms interval  CHANGE THIS TO UP SPEED FOR DIFFICULTY
    
};


window.addEventListener('keydown', (function (keyPress) { // creating event listener for keydown
    const direction = keyPress.key; //declaring direction and assigning it which key is pressed
    if(canPlay === true){
        snake.changeDirection(direction); //change direction of snake dependent on button pressed
    }
    keyPress.preventDefault(); //prevent arrow keys from moving screen
}));

document.getElementById('rightButton').onclick = function(){
    if(canPlay === true){
    snake.moveRight();
    }
}

document.getElementById('upButton').onclick = function(){
    if(canPlay === true){
    snake.moveUp();
    }
}

document.getElementById('downButton').onclick = function(){
    if(canPlay === true){
    snake.moveDown();
    }
}

document.getElementById('leftButton').onclick = function(){
    if(canPlay === true){
    snake.moveLeft();
    }
}

