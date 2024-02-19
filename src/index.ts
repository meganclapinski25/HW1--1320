import Sprite from './Sprite';
import Ball from './Ball';
import Bricks from './Bricks';
import GameLabel from './GameLabel';

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
let rightPressed = false;
let leftPressed = false;
let paddleXStart = (canvas.width - paddleWidth) / 2;
const paddleYStart = (canvas.height - paddleHeight);
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 80;
const brickHeight = 20;
const brickPadding = 5;
const brickOffsetTop = 30;
const brickOffsetLeft = 180;
let score = 0;
let lives = 3;

let ball = new Ball(canvas.width / 2, canvas.height / 2, 2, -2, ballRadius, "orange");


const bricks = new Bricks({
  cols: brickColumnCount,
  rows: brickRowCount,
  width: brickWidth,
  height: brickHeight,
  padding: brickPadding,
  offsetLeft: brickOffsetLeft,
  offsetTop: brickOffsetTop
});

const scoreLabel = new GameLabel('Score ', 8, 20,  "blue");
const livesLabel = new GameLabel('Lives', canvas.width - 80, 20);
livesLabel.value = 3;

const paddle = new Sprite(paddleXStart, paddleYStart, paddleWidth, paddleHeight, "blue");

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e: MouseEvent) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleXStart = relativeX - paddleWidth / 2;
  }
}

function keyDownHandler(e: KeyboardEvent) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e: KeyboardEvent) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function collisionDetection() {
  for (let c = 0; c < bricks.cols; c++) {
    for (let r = 0; r < bricks.rows; r++) {
      const brick = bricks.bricks[c][r];
      if (brick.status === 1) {
        if (ball.x > brick.x &&
            ball.x < brick.x + brickWidth &&
            ball.y > brick.y && ball.y < brick.y + brickHeight) {
          ball.dy = -ball.dy;
          brick.status = 0;
          scoreLabel.value += 1;
          if (scoreLabel.value === brickRowCount * brickColumnCount) {
            alert("YOU WIN CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function movePaddle() {
  if (rightPressed && paddleXStart < canvas.width - paddle.width) {
    paddleXStart += 7;
  } else if (leftPressed && paddleXStart > 0) {
    paddleXStart -= 7;
  }
  paddle.x = paddleXStart;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bricks.render(ctx);
  ball.render(ctx);
  paddle.render(ctx);
  scoreLabel.render(ctx);
  livesLabel.render(ctx);
  ball.moveBy(dx, dy);
  movePaddle();
  collisionDetection();
  x += dx;
  y += dy;
  scoreLabel.render(ctx);
  livesLabel.render(ctx);
  if (ball.x + dx > canvas.width - ballRadius || ball.x + dx < ballRadius) {
    dx = -dx;
  }
  if (ball.y + dy < ballRadius) {
    dy = -dy;
  } else if (ball.y + dy > canvas.height - ballRadius) {
    if (ball.x > paddleXStart && ball.x < paddleXStart + paddleWidth) {
      if (ball.y > canvas.height - paddleHeight) {
        dy = -dy;
      }
    } else {
      livesLabel.value -= 1;
      if (livesLabel.value < 1) {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval); // Needed for Chrome to end game
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        paddleXStart = (canvas.width - paddleWidth) / 2;
        dx = 2;
        dy = -2;
      }
    }
  }
  if (rightPressed && paddleXStart < canvas.width - paddleWidth) {
    paddleXStart += 7;
  } else if (leftPressed && paddleXStart > 0) {
    paddleXStart -= 7;
  }
  requestAnimationFrame(draw);
}

draw();
