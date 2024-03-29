class Sprite {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;

    constructor(x = 0, y = 0, width = 10, height = 10, color='red') {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.color = color
    }
  
    moveTo(x, y) {
      this.x = x
      this.y = y
    }
  
    moveBy(dx, dy) {
      this.x += dx
      this.y += dy
    }
  
    render(ctx) {
      ctx.beginPath()
      ctx.rect(this.x, this.y, this.width, this.height)
      ctx.fillStyle = this.color
      ctx.fill()
    }
}
export default Sprite;