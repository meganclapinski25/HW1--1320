class Paddle extends Sprite{
    constructor(x, y, width , height, color = 'purple') {
        super(x, y, width, height, color);
        
        
    } moveTo(x, y) {
        this.x = x
        this.y = y
      }
    
      moveBy(dx, dy) {
        this.x += dx
        this.y += dy
      }render(ctx){
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#1a7011";
        ctx.fill();
        ctx.closePath();
      }
 }