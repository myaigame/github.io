// stage.js 수정된 코드
import { Ball } from './ball.js';
import { Paddle } from './paddle.js';
import { checkBallPaddleCollision } from './collision.js';
import { gameOver } from './gameOver.js'; // gameOver 모듈 임포트

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let rightPressed = false;
let leftPressed = false;

const ball = new Ball(ctx, canvas.width/2, canvas.height-30, 2, -2, 10);
const paddleWidth = canvas.width * 0.1; // 캔버스 너비의 10%로 설정된 패들 너비
const paddleHeight = 10;
const paddleX = (canvas.width - paddleWidth) / 2;
const paddle = new Paddle(ctx, paddleWidth, paddleHeight, paddleX, canvas.width);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();

    if(checkBallPaddleCollision(ball, paddle)) {
        ball.dy = -ball.dy;
    } else if (ball.y + ball.dy > canvas.height - ball.radius) {
        gameOver(ctx, canvas); // 게임 오버 처리
        return; // 게임 루프 종료
    }

    ball.update();
    paddle.update(rightPressed, leftPressed);

    requestAnimationFrame(draw);
}

draw();
