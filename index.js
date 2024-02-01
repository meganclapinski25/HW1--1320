const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
    
        
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
const brickRowCount =5;
const brickColumnCount = 8;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetLeft = 30;
const brickOffsetTop = 30;
const paddleXStart = (canvas.width - paddleWidth) / 2 ;
const paddleYStart = (canvas.height-paddleHeight);
const objectColor = "red";

const gameOverMessage = "Game Over";


        const rightPressed = false;
        const leftPressed = false;
        
        
        
        
    //constants   
    
          
    //variables
          
    
      
          
    




//classes
class Sprite {
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

    
          
  class Brick extends Sprite{
    constructor(x, y, width, height, color = 'purple', status = 1){
        super(x, y, width, height, color)
        this.status = status;
        
    }
 }

         class Bricks {
            constructor(cols, rows){
                
                this.cols = cols;
                this.rows = rows;
                this.bricks = [];
                this.init();
            }
            init(){
                for(let c = 0; c < this.cols; c +=1){
                    this.bricks[c] = [];
                    for(let r = 0; r< this.rows; r+=1){
                        const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                        const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                        this.bricks [c][r] = new Brick(brickX, brickY, brickWidth, brickHeight, objectColor);
                    }
                }
            }
            render(ctx){
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
    

          
    class Ball extends Sprite {
        constructor(x = 0, y = 0, dx =2, dy= -1, radius = 10, color) {
          super(x, y, radius * 2, radius * 2, color) // Must pass params to super when extending a class!
      
          this.radius = radius;
          this.dx = dx;
          this.dy = dy;
        }
        move(){
            this.moveBy(this.dx, this.dy);
        }
      
        render(ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }
      }
        

        class Paddle extends Sprite {
            constructor(x, y, width , height, color = 'purple') {
            super(x, y, width, height, color);
            
            
        } moveTo(x, y) {
            this.x = x
            this.y = y
          }
        
          moveBy(dx, dy) {
            this.x += dx
            this.y += dy
          }
        
        

        
    }

        class Background extends Sprite{
            constructor(x, y, width, height, color = '#ffffff') {
            super(x, y, width, height, color)
            }render(ctx){
                ctx.fillStyle = this.color
                ctx.fillRect(0,0,canvas.width, canvas.height);
            }
        }
        const background = new Background(0,0,500,500, 'white')

        class GameLabel extends Sprite{
            constructor(text, x,y,color, font = "16px Arial"){
                super(x,y,0,0,color);
                this.text =text;
                this.value = 0;
                this.font = font;

            }render(ctx){
                ctx.font = this.font;
                ctx.fillStyle = this.color
                ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
            }
        }
        
          
          

                

//functions
    function mouseMoveHandler(e){
        const relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width){
            paddle.x = relativeX - paddle.width/2;
        }

    }
    function keyDownHandler(e) {
            if (e.key === "Right" || e.key === "ArrowRight") {
                rightPressed = true;
            } else if (e.key === "Left" || e.key === "ArrowLeft") {
                leftPressed = true;
            }
    }
    function keyUpHandler(e) {
            if (e.key === "Right" || e.key === "ArrowRight") {
                rightPressed = false;
            } else if (e.key === "Left" || e.key === "ArrowLeft") {
                leftPressed = false;
            }
    }
    function collisionDetection() {
        for (let c = 0; c < bricks.cols; c++) {
            for (let r = 0; r < bricks.rows; r++) {
                const bricks = this.bricks.bricks[c][r];
                if (brick.status === 1) {
                    if (this.ball.x > brick.x && this.ball.x < brick.x + this.brickWidth && this.ball.y > brick.y && this.ball.y < brick.y + this.brickHeight) {
                        thisball.dy = -this.ball.dy;
                        brick.status = 0;
                        this.scoreLabel.value +=1;
                        if (score === brick.rows * bricks.cols){
                            alert('You Win');
                            document.location.reload();
                        }

                    }
                }
            }
        }
    }
    
    
    

    
let lives = 3;
//const
const ball = new Ball (0,0,2,-2, ballRadius, objectColor)
const paddle = new Sprite(paddleXStart, paddleYStart, paddleWidth, paddleHeight, objectColor);
const bricks = new Bricks({
            cols: brickColumnCount,
            rows: brickRowCount,
            width: brickWidth,
            height: brickHeight,
            padding:brickPadding,
            offsetLeft: brickOffsetLeft,
            offsetTop : brickOffsetTop,
            color: objectColor,
        });
        const scoreLabel = new GameLabel('Score: ', 8, 20, objectColor);
        const livesLabel = new GameLabel('Lives: ', canvas.width - 65, 20);






       
    

    
       
//game function
       function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            bricks.render(ctx);
            ball.move();
            ball.render(ctx);
            
            paddle.render(ctx);
            
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    bricks[c][r].render(ctx);
                }
            }
            
            collisionDetection();
            scoreLabel.render(ctx);
            livesLabel.render(ctx);
            
            
            
            if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
                ball.dx = -ball.dx;
            }
            
            if (ball.y + ball.dy < ball.radius) {
                ball.dy = -ball.dy;
            } else if (ball.y + ball.dy > canvas.height - ball.radius) {
                if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
                    ball.dy = -ball.dy;
                } else {
                    livesLabel.value--; // Update livesLabel value
                    if (livesLabel.value === 0) {
                        alert("GAME OVER");
                        document.location.reload();
                    }
                }
            }
            
            
            
            
            
            

        }
        //event listeners
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);

        draw();
