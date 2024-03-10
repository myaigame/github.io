export class Paddle {
    constructor(ctx, width, height, x, canvasWidth) {
        this.ctx = ctx;
        this.width = width * 2; // 너비를 2배로 조정
        this.height = height;
        this.x = x;
        this.canvasWidth = canvasWidth;
        this.gapFromBottom = 21; // 바닥에서 21픽셀 띄우기
    }

    draw() {
        this.ctx.beginPath();
        // 패들의 y 위치를 바닥에서 21픽셀 띄운 위치로 조정
        this.ctx.rect(this.x, this.ctx.canvas.height - this.height - this.gapFromBottom, this.width, this.height);
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
