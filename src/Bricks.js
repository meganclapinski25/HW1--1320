class Bricks {
    constructor(cols, rows) {
      this.rows = rows;
      this.cols = cols;
      this.bricks = [];
      this.setup();
    }
  
    setup() {
        for (let c = 0; c < this.cols; c += 1) {
          this.bricks[c] = [];
          for (let r = 0; r < this.rows; r += 1) {
            const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
            const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
            this.bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight);
          }
      }
    }
  
    render(ctx) {
      for (let c = 0; c < this.cols; c += 1) {
        for (let r = 0; r < this.rows; r += 1) {
            const brick = this.bricks[c][r];
          if (brick.status === 1) {
            brick.render(ctx);
          }
        }
      }
    }
  }