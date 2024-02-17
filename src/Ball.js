import Sprite from './Sprite';

class Ball extends Sprite{
    constructor( x = 0, y = 0, dx =2, dy = -1, radius = 10, color = 'red'){
        super(x,y,radius *2, radius *2, color)
        this.radius = radius;
        this.dx= dx; 
        this.dy = dy;
    }moveBy(dx, dy) {
      this.x += dx;
      this.y += dy;
  }
  
    render(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
 } 
 export default Ball;