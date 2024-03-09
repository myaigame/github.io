import { Ball } from './ball.js';
import { Paddle } from './paddle.js';
import { checkBallPaddleCollision } from './collision.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let rightPressed = false;
let leftPressed = false;

const ball = new Ball(canvas.width/2, canvas.height-30, 2, -2, 10);
const paddle = new Paddle((canvas.width-75)/2, canvas.height-10, 75, 10);

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
    ball.draw(ctx);
    paddle.draw(ctx);

    if(checkBallPaddleCollision(ball, paddle)) {
        ball.dy = -ball.dy;
    }

    ball.update();
    paddle.update(rightPressed, leftPressed);

    requestAnimationFrame(draw);
}

draw();
