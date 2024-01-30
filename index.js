const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//constants   
      const ballRadius = 10;
      const paddleHeight = 10;
      const paddleWidth = 75;
      const brickRowCount = 7;
      const brickColumnCount = 12;
      const brickWidth = 55;
      const brickHeight = 10;
      
       
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

        export default Sprite

       
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
            constructor(x, y, width, height, color = 'fuchsia', status = 1){
                super(x,y,width,height,color);
                this.status = status;
            }
         }
          
          
        

        class Paddle extends Sprite {
            constructor(x, y, width = 75, height = 20, color = '#0095DD') {
            super(x, y, width, height, color)
            
            
        } render(ctx){
            ctx.move(leftPressed, rightPressed, canvasWidth)
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

        class Score extends Sprite{
            constructor(x,y,color,font = "16px Helvetica", score = 0){
                super(x,y,0,0,color);
                this.font = font;
                this.score = score;
            }
            render(ctx){
                ctx.font = this.font;
                ctx.fillStyle = this.color
                ctx.fillText(`Score: ${this.score}`);
            }
            update(points){
                this.score+=points;
            }
            reset(){
                this.score = 0;
            }
        }
        class Lives extends Sprite{
            constructor(x, y, color, font = '16px Helvetica', lives = 3){
                super(x,y,0,0,color);
                this.font = font;
                this.lives = lives;
            }render(ctx){
                ctx.font = this.font;
                ctx.fillStyle = this.color;
                ctx.fillText(`Lives: ${this.lives}`);
            }loseLife(){
                this.lives--;
            }reset(){
                this.lives = 3;
            }
        }
        
          const ball = new Ball(100, 300, 10, 'orange');
          const paddle = new Paddle (100, 250, 10, 'orange');
          const newBackground = new Background( 0, 0, canvas.width, canvas.height, 'white');
          const scoreLabel = new Score(10,30,'red');
          const livesLabel = new Lives(10,50,'red');
          const bricks = [];
          for (let c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            for (let r = 0; r < brickRowCount; r++) {
                const brick = new Brick(0, 0, brickWidth, brickHeight, 'fuchsia');
                brick.x = c * (brick.width + brickPadding) + brickOffsetLeft;
                brick.y = r * (brick.height + brickPadding) + brickOffsetTop;
                bricks[c][r] = brick;
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
                        {
                        dy = -dy;
                        b.status = 0;
                        score++;
                        if(score === brickRowCount * brickColumnCount){
                            alert("YOU WIN< CONGRATULATIONS!");
                            document.location.reload();
                        }
                    }
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
            paddle.move(canvas.width);
            paddle.render(ctx);
            
            collisionDetection();
            scoreLabel.render(ctx);
            livesLabel.render(ctx);
            
            if(ball.x + ball.dx > canvas.width-ballRadius || ball.x + ball.dx < ballRadius) {
               ball. dx = -ball.dx;
            }
            if(ball.y + ball.dy < ballRadius) {
                ball.dy = -ball.dy;
            }
            else if(ball.y + ball.dy > canvas.height-ballRadius) {
                if(ball.x > paddleX && ball.x < paddleX + paddleWidth) {
                    ball.dy = -ball.dy;
                }
                else {
                    lives--;
                    if (!lives) {
                    alert("GAME OVER");
                    document.location.reload();
                    } else {
                    ball.reset();
                    paddle.reset();
                    } 
                }
            }
            
            
            
            
            requestAnimationFrame(draw);

        }
        //event listeners
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);

        draw();
