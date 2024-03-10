function checkBallPaddleCollision(ball, paddle) {
    // 공의 아래쪽 가장자리가 패들의 윗면보다 아래에 있는지,
    // 공의 위쪽 가장자리가 패들의 아랫면보다 위에 있는지 확인
    let ballBottomEdge = ball.y + ball.radius;
    let ballTopEdge = ball.y - ball.radius;
    let paddleTopEdge = paddle.y;
    let paddleBottomEdge = paddle.y + paddle.height;

    // 공이 패들의 좌우 범위 안에 있는지 확인
    let ballIsWithinPaddleWidth = ball.x > paddle.x && ball.x < paddle.x + paddle.width;

    if (ballBottomEdge > paddleTopEdge && ballTopEdge < paddleBottomEdge && ballIsWithinPaddleWidth) {
        // 충돌 시, 공의 방향을 바꾸거나 필요한 처리를 실행
        ball.dy = -ball.dy; // 예를 들어, 공의 y축 방향을 반전시킵니다.

        // 필요에 따라 추가적인 충돌 처리 로직을 여기에 구현할 수 있습니다.
    }
}
