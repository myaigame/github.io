export class Paddle {
    constructor(ctx, width, height, x, canvasWidth, ballRadius) {
        this.ctx = ctx;
        this.width = width * 2; // 너비를 2배로 조정
        this.height = height;
        this.x = x;
        this.canvasWidth = canvasWidth;
        this.ballRadius = ballRadius; // 공의 지름 추가
    }

    draw() {
        this.ctx.beginPath();
        // 패들 위치를 공의 지름만큼 바닥에서 띄우기
        this.ctx.rect(this.x, this.ctx.canvas.height - this.height - this.ballRadius, this.width, this.height);
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
