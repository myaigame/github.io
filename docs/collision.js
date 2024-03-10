// collision.js

export function checkBallPaddleCollision(ball, paddle) {
    // 패들의 y 위치를 조정: 바닥에서 21픽셀 띄운 위치 반영
    let paddleYAdjusted = paddle.y - 21;
    if (ball.y + ball.dy > paddleYAdjusted - ball.radius && 
        ball.x > paddle.x && 
        ball.x < paddle.x + paddle.width) {
        return true;
    } else {
        return false;
    }
}

export function checkBallBrickCollision(ball, brick) {
    if (ball.x > brick.x && 
        ball.x < brick.x + brick.width && 
        ball.y + ball.dy > brick.y && 
        ball.y + ball.dy < brick.y + brick.height) {
        return true;
    } else {
        return false;
    }
}
