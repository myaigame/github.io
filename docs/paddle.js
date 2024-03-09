export class Paddle {
    constructor(ctx, width, height, x, canvasWidth) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.x = x;
        this.canvasWidth = canvasWidth;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.ctx.canvas.height - this.height, this.width, this.height);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(rightPressed, leftPressed) {
        if(rightPressed && this.x < this.canvasWidth - this.width) {
            this.x += 7;
        } else if(leftPressed && this.x > 0) {
            this.x -= 7;
        }
    }
}
