import Sprite from './Sprite';

class Ball extends Sprite {
  radius: number;
  dx: number;
  dy: number;

  constructor(x: number, y: number, radius: number = 10,  dx: number, dy: number,color: string = 'blue') {
    super(x, y, radius * 2, radius * 2, color);
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }

  moveBy(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
