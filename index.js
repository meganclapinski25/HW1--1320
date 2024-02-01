const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//constants   
var x = canvas.width/2;
var y = canvas.height-30;

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
//variables
      

      
      
      
      let rightPressed = false;
      let leftPressed = false;
      let paddleX = (canvas.width- paddleWidth) / 2;
      
      let score = 0;
      let lives = 3;

//classes
class Sprite {
    constructor(x, y, width, height, color='red') {
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


       
          class Ball extends Sprite {
            constructor(x, y, radius, color) {
              super(x, y, radius * 2, radius * 2, color) // Must pass params to super when extending a class!
          
              this.radius = radius;
              this.dx = 2
              this.dy = -2
            }
            move(){
                this.x+=this.dx;
                this.y +=this.dy;
            }
          
            render(ctx) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
              ctx.fillStyle = this.color;
              ctx.fill();
              ctx.closePath();
            }
          }
    
          
         class Brick extends Sprite{
            constructor(x, y, width, height, color = 'purple', status = 1){
                super(x,y,width,height,color);
                this.status = status;
                
            }render(ctx){
                ctx.beginPath();
                ctx.rect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
                }
         }
        
    

          
          
        

        class Paddle extends Sprite {
            constructor(x, y, width , height, color = 'purple') {
            super(x, y, width, height, color)
            
            
        }  render(ctx) {
            ctx.beginPath();
            ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
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
                super(x,y,0,0,color)
                this.text =text;
                this.x = x;
                this.y = y;
                this.color = color;
                this.value = 0;
                this.font = font;

            }render(ctx){
                ctx.font = this.font;
                ctx.fillStyle = this.color
                ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
            }
        }
        
          const ball = new Ball(100, 300, 10, 'orange');
          const paddle = new Paddle (100, 250, 10, 'orange');
          const newBackground = new Background( 0, 0, canvas.width, canvas.height, 'grey');
          const scoreLabel = new Score(10,30,'red');
          const livesLabel = new Lives(10,50,'red');
          const bricks = [];
            for (let c = 0; c < brickColumnCount; c++) {
                bricks[c] = [];
                for (let r = 0; r < brickRowCount; r++) {
                    const newBrick = new Brick(
                        c * (brickWidth + brickPadding) + brickOffsetLeft,
                         r * (brickHeight + brickPadding) + brickOffsetTop,
                        brickWidth,
                        brickHeight,
                        'fuchsia'
                    );
                    bricks[c][r] = newBrick;
                }
            }

//functions
    function mouseMoveHandler(e){
        const relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width){
            paddleX = relativeX - paddleWidth/2;
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
        for (var c = 0; c < brickColumnCount; c++) {
            for (var r = 0; r < brickRowCount; r++) {
                var b = bricks[c][r];
                if (b.status == 1) {
                    if (ball.x > b.x && ball.x < b.x + brickWidth && ball.y > b.y && ball.y < b.y + brickHeight) {
                        ball.dy = -ball.dy;
                        b.status = 0;
                    }
                }
            }
        }
    }
    
    
    

    
       




       
    

    
       
//game function
       function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            newBackground.render(ctx);
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
            requestAnimationFrame(draw);
            
            if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.dy < ballRadius) {
        ball.dy = -ball.dy;
    } else if (ball.y + ball.dy > canvas.height - ballRadius) {
        if (ball.x > paddleX && ball.x < paddleX + paddleWidth) {
            ball.dy = -ball.dy;
        } else {
            lives--;
            if (!lives) {
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
