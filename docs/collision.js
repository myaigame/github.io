export function checkBallPaddleCollision(ball, paddle) {
    // 패들의 실제 상단 위치를 정확히 계산
    let paddleTopEdgeY = paddle.y - paddle.height - 21; // 패들 높이와 바닥 간격 고려
    if (ball.y + ball.dy + ball.radius > paddleTopEdgeY && 
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
