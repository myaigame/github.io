// collision.js

export function checkBallPaddleCollision(ball, paddle) {
    if (ball.y + ball.dy > paddle.y - ball.radius && 
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
