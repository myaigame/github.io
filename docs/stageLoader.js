import { canvas, ctx, gameSettings, drawBall, drawPaddle, drawBricks } from './core.js';
import { stageConfigs } from './stageConfig.js';

let x, y, dx, dy;
let paddleX;
let rightPressed = false;
let leftPressed = false;
let bricks = [];
let score = 0;
let ballRadius;
let gameSettings.brickWidth = canvas.width / gameSettings.brickColumnCount - gameSettings.brickPadding;

// 키보드 이벤트 핸들러
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// 충돌 감지 함수
function collisionDetection() {
    for(let c = 0; c < gameSettings.brickColumnCount; c++) {
        for(let r = 0; r < gameSettings.brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x + gameSettings.brickWidth && y > b.y && y < b.y + gameSettings.brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == gameSettings.brickRowCount * gameSettings.brickColumnCount) {
                        alert("축하합니다! 모든 벽돌을 제거했습니다!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

// 스테이지 설정 로드
function loadStage(stageNumber) {
    const config = stageConfigs.find(config => config.stage === stageNumber);
    ballRadius = config.ballSize;
    dx = config.ballSpeed.dx;
    dy = config.ballSpeed.dy;

    paddleX = (canvas.width - gameSettings.paddleWidth) / 2;
    x = canvas.width / 2;
    y = canvas.height - 30;
    score = 0;

    bricks = [];
    for(let c = 0; c < gameSettings.brickColumnCount; c++) {
        bricks[c] = [];
        for(let r = 0; r < gameSettings.brickRowCount; r++) {
            bricks[c][r] = { x: c * (gameSettings.brickWidth + gameSettings.brickPadding) + gameSettings.brickOffsetLeft, y: r * (gameSettings.brickHeight + gameSettings.brickPadding) + gameSettings.brickOffsetTop, status: 1 };
        }
    }
}

// 게임 루프
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks(bricks, gameSettings.brickRowCount, gameSettings.brickColumnCount, gameSettings.brickWidth, gameSettings.brickHeight, gameSettings.brickPadding, gameSettings.brickOffsetLeft, gameSettings.brickOffsetTop);
    drawBall(x, y, ballRadius);
    drawPaddle(paddleX, gameSettings.paddleHeight, gameSettings.paddleWidth);
    collisionDetection();

    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    if(rightPressed && paddleX < canvas.width - gameSettings.paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(gameLoop);
}

// 게임 초기화 및 시작
loadStage(1);
gameLoop();

