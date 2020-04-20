function Mouse() {
    this.x;
    this.y;

    this.mouseLocation = function () { //Random location picker for mouse
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale; // get a random integer within the confines of row in increments of 10
        this.y = (Math.floor(Math.random() * colums - 1) + 1) * scale;
    }

    this.draw = function () { //mouse draw function
        /* ctx.fillStyle = "grey";
        ctx.fillRect(this.x,this.y,scale,scale); */
        var mouseImage = new Image();
        mouseImage.src = "assets/images/mouse.png"
        ctx.drawImage(mouseImage, this.x, this.y, scale, scale);
    }
}