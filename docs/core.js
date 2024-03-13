// core.js
export const canvas = document.getElementById("gameCanvas");
export const ctx = canvas.getContext("2d");

export const gameSettings = {
    ballRadius: 10, // 기본 공 크기
    paddleHeight: 10,
    paddleWidth: 75,
    brickRowCount: 3,
    brickColumnCount: 5,
    brickHeight: 20,
    brickPadding: 10,
    brickOffsetTop: 30,
    brickOffsetLeft: 10,
};

export function drawBall(x, y, ballRadius) {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD"; // 기본 공 색상
    ctx.fill();
    ctx.closePath();
}

export function drawPaddle(paddleX, paddleHeight, paddleWidth) {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD"; // 기본 패들 색상
    ctx.fill();
    ctx.closePath();
}

export function drawBricks(bricks, brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetLeft, brickOffsetTop) {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD"; // 기본 벽돌 색상
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
