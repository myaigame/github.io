export function gameOver(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 클리어
    ctx.font = "30px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2); // 중앙에 게임 오버 메시지 표시
}
