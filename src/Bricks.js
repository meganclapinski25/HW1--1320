import Brick from './Brick';

class Bricks {
  constructor({ cols, rows, width, height, padding, offsetLeft, offsetTop }) {
    this.rows = rows;
    this.cols = cols;
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetLeft = offsetLeft;
    this.offsetTop = offsetTop;
    this.bricks = [];
    this.setup();
  }
  
  setup() {
    for (let c = 0; c < this.cols; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r++) {
        const brickX = c * (this.width + this.padding) + this.offsetLeft;
        const brickY = r * (this.height + this.padding) + this.offsetTop;
        this.bricks[c][r] = new Brick(brickX, brickY, this.width, this.height);
      }
    }
  }
  
  render(ctx) {
    for (let c = 0; c < this.cols; c++) {
      for (let r = 0; r < this.rows; r++) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }
}
  export default Bricks;