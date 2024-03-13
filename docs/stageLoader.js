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

// 키보드 이벤트 핸들러
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

// 스테이지 로드 함수
function loadStage(stageNumber) {
    const config = stageConfigs.find(config => config.stage === stageNumber);
    ballRadius = config.ballSize;
    dx = config.ballSpeed.dx;
    dy = config.ballSpeed.dy;

    paddleX = (canvas.width - gameSettings.paddleWidth) / 2;

    bricks = [];
    for (let c = 0; c < gameSettings.brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < gameSettings.brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    x = canvas.width / 2;
    y = canvas.height - 30;
}

// 게임 루프
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks(bricks, gameSettings.brickRowCount, gameSettings.brickColumnCount, canvas.width / gameSettings.brickColumnCount - gameSettings.brickPadding, gameSettings.brickHeight, gameSettings.brickPadding, gameSettings.brickOffsetLeft, gameSettings.brickOffsetTop);
    drawBall(x, y, ballRadius);
    drawPaddle(paddleX, gameSettings.paddleHeight, gameSettings.paddleWidth);

    // 공 위치 업데이트
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height - ballRadius) {
        if(x > paddleX && x < paddleX + gameSettings.paddleWidth) {
            dy = -dy;
        } else {
            // 여기서 게임 오버 처리를 할 수 있습니다.
            alert("Game Over");
            document.location.reload();
        }
    }

    x += dx;
    y += dy;

    // 패들 이동
    if(rightPressed && paddleX < canvas.width - gameSettings.paddleWidth) {
        paddleX += 7;
    } else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    requestAnimationFrame(gameLoop);
}

// 게임 시작
loadStage(1); // 1번째 스테이지 로드
gameLoop();
