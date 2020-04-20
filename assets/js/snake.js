//declaring snake function
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0; //move on x-axis by this every 250ms
    this.ySpeed = 0;
    /* this.highScore = 0; */
    this.total = 0;
    this.snakeLength = [];
    var snakeTop = new Image();
        snakeTop.src = "assets/images/head.png"

    //Creating draw function for snake

    this.draw = function () {
        ctx.fillStyle = "green"; //colour of snake
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";

        
        ctx.drawImage(snakeTop, this.x, this.y, scale, scale);

        for (let i = 0; i < this.snakeLength.length; i++) {
            /* var snakeBody = document.getElementById("snakesHead");
            ctx.drawImage(snakeBody,this.snakeLength[i].x, this.snakeLength[i].y, scale, scale); */

            ctx.fillRect(this.snakeLength[i].x, this.snakeLength[i].y, scale, scale);  //add a square to the end of length
            ctx.strokeRect(this.snakeLength[i].x, this.snakeLength[i].y, scale, scale);
        }

        
        /* var snakeTop = document.getElementById("snakeHead");
          ctx.drawImage(snakeTop, this.x, this.y, scale, scale); */

        /* ctx.strokeRect(this.x, this.y, scale, scale);
        ctx.fillRect(this.x, this.y, scale, scale); */ //location of snake, and size,10x10
    }

    this.update = function () { //refresh for snake updates

        for (let i = 0; i < this.snakeLength.length - 1; i++) { //add tail to snake
            this.snakeLength[i] = this.snakeLength[i + 1];
        }

        this.snakeLength[this.total - 1] = { x: (this.x), y: (this.y) }; // add tail at snakes location

        this.x = this.x + this.xSpeed; //snakes speed
        this.y = this.y + this.ySpeed;

        if (this.x > canvas.width) { //checking if snake goes out of bounds for each side of square and resetting position and speed to 0
            End();
        }

        else if (this.x < 0) {
            End();
        }

        else if (this.y > canvas.height) { //allowing for canvas dimensions to be changed
            End();
        }

        else if (this.y < 0) {
            End();
        }

        /* possible idea for difficulty change later on */
        /* Don't reset the snake, just let it flow through using this.(x or y) = canvas.(height or wdith) */
    }


    this.moveUp = function(){
        if (this.ySpeed != (scale * 1)) {
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
        }
        else {
            console.log("can't turn back on itself");
        }
    }

    this.moveRight = function(){
        if(this.xSpeed != (-scale * 1)){
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
        }
        else{
            console.log("can't turn back on itself");
        }
    }

    this.moveDown = function(){
        if (this.ySpeed != (-scale * 1)) {
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
        } 
        else {
            console.log("can't turn back on itself");
        }
    }

    this.moveLeft = function(){
        if (this.xSpeed != (scale * 1)) {
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
        }
        else {
            console.log("can't turn back on itself");
        }
    }



    this.changeDirection = function (direction) { // declaring change direction function
        var arrowSound = new Audio("assets/sounds/arrowPress.wav");
        arrowSound.play();
        if (direction === 'ArrowUp') {
            this.moveUp();
            /* if (this.ySpeed != (scale * 1)) {
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
            }
            else {
                console.log("can't turn back on itself");
            } */
        }
        if (direction === 'ArrowRight') {
            this.moveRight();
            /* if (this.xSpeed != (-scale * 1)) {
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
            } */
           /*  else {
                console.log("can't turn back on itself");
            } */
        }
        if (direction === 'ArrowDown') {
            this.moveDown();
            /* if (this.ySpeed != (-scale * 1)) {
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
            } else {
                console.log("can't turn back on itself");
            } */
        }
        if (direction === 'ArrowLeft'){
            this.moveLeft();
            /* if (this.xSpeed != (scale * 1)) {
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
            }
            else {
                console.log("can't turn back on itself");
            } */
        }
    }
        
        


    this.eat = function (mouse) { //checks to see if snake collides with mouse, if so, increment total and return true
        var mouseAte = new Audio("assets/sounds/shortEat.wav");

        if (this.x === mouse.x && this.y === mouse.y) {
            mouseAte.play();
            this.total++;
            return true;
        }
        else {
            return false;
        }
    }

    this.eatItself = function () { //if head of snake hits another part of its body eat itself, resetting total and size of snake to 0
        for (let i = 0; i < this.snakeLength.length; i++) {
            if (this.x === this.snakeLength[i].x && this.y === this.snakeLength[i].y) {
                End();
            }
        }
    }
}