// 공과 패들 간의 충돌을 검사하는 함수
export function checkBallPaddleCollision(ball, paddle) {
    let ballBottomEdge = ball.y + ball.radius;
    let ballTopEdge = ball.y - ball.radius;
    let paddleTopEdge = paddle.y;
    let paddleBottomEdge = paddle.y + paddle.height;
    let ballIsWithinPaddleWidth = ball.x > paddle.x && ball.x < paddle.x + paddle.width;

    if (ballBottomEdge > paddleTopEdge && ballTopEdge < paddleBottomEdge && ballIsWithinPaddleWidth) {
        ball.dy = -ball.dy; // 공의 y축 방향을 반전
    }
}

// 이 파일에서 추가적인 충돌 검사 로직이 필요한 경우, 여기에 더 함수를 정의하고 export할 수 있습니다.
