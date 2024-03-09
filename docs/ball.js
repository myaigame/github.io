export class Ball {
    constructor(ctx, x, y, dx, dy, radius) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x + this.dx > this.ctx.canvas.width-this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if(this.y + this.dy > this.ctx.canvas.height-this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
    }
}
