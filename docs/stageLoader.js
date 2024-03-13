// stageLoader.js
import { canvas, ctx, gameSettings, drawBall, drawPaddle, drawBricks } from './core.js';
import { stageConfigs } from './stageConfig.js';

let x, y, dx, dy;
let paddleX;
let rightPressed = false;
let leftPressed = false;
let bricks = [];
let score = 0;
let ballRadius;

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

export function loadStage(stageNumber) {
    const config = stageConfigs.find(config => config.stage === stageNumber);
    ballRadius = config.ballSize;
    dx = config.ballSpeed.dx;
    dy = config.ballSpeed.dy;

    paddleX = (canvas.width - gameSettings.paddleWidth) / 2;

    for (let c = 0; c < gameSettings.brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < gameSettings.brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    x = canvas.width / 2;
    y = canvas.height - 30;
}

export function startGame() {
    loadStage(1); // 1번째 스테이지 로드
    gameLoop();
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks(bricks, gameSettings.brickRowCount, gameSettings.brickColumnCount, canvas.width / gameSettings.brickColumnCount - gameSettings.brickPadding, gameSettings.brickHeight, gameSettings.brickPadding, gameSettings.brickOffsetLeft, gameSettings.brickOffsetTop);
    drawBall(x, y, ballRadius);
    drawPaddle(paddleX, gameSettings.paddleHeight, gameSettings.paddleWidth);

    // 여기에 충돌 감지 및 기타 게임 로직 추가...

    requestAnimationFrame(gameLoop);
}

startGame();
