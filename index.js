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
      const brickPadding = 10;
      const brickOffsetTop = 30;
      const brickOffsetLeft = 30;
       
//variables
      

      
      
      
      let rightPressed = false;
      let leftPressed = false;
      let paddleX = (canvas.width- paddleWidth) / 2;
      
      let score = 0;
      let lives = 3;

//classes
        class Sprite {
            constructor(x = 0, y = 0, width = 100, height = 100, color = '#f00') {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
            this.color = color
            }
            render(ctx) {
                ctx.beginPath();
                ctx.rect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
              }
            
        }
        
        export default Sprite

        class Brick extends Sprite {
            constructor(x, y, width = 75, height = 20, color = '#0095DD') {
              super(x, y, width, height, color) // pass arguments to Sprite!
              this.status = true // adds a new property
            }
          }
        
        class Ball extends Sprite {
            constructor(x = 0, y = 0, radius = 10, color = "#0095DD") {
              super(x, y, 0, 0, color)
              this.radius = radius;
              this.dx = 2
              this.dy = -2
            }
          
            move() {
              this.x += this.dx
              this.y += this.dy
            }
          
            render(ctx) { // Overrides the existing render method!
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
              ctx.fillStyle = this.color;
              ctx.fill();
              ctx.closePath();
            }
          }
          const b = new Ball(200, 200, 10)
          b.render(ctx)
        

        class Paddle extends Sprite {
            constructor(x, y, width = 75, height = 20, color = '#0095DD') {
            super(x, y, width, height, color)
        }
        move(leftPressed, rightPressed, canvasWidth){

        }
    }

        class Background extends Sprite{
            constructor(x, y, width, height, color = '#ffffff') {
            super(x, y, width, height, color)
            }
        }
        class Score extends Sprite{

        }
        class Lives extends Sprite{

        }








      
 //brick array     
      var bricks = [];

        for (var c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            
            for (var r = 0; r < brickRowCount; r++) {
                bricks[c][r] = new Brick(0, 0);
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
                    if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
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
    

    
       




       
    


       
//game function
       function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBricks();
            drawBall();
            drawPaddle();
            drawScore();
            drawLives();
            collisionDetection();

            
            if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
            if(y + dy < ballRadius) {
                dy = -dy;
            }
            else if(y + dy > canvas.height-ballRadius) {
                if(x > paddleX && x < paddleX + paddleWidth) {
                    dy = -dy;
                }
                else {
                    lives--;
                    if (!lives) {
                    alert("GAME OVER");
                    document.location.reload();
                    } else {
                    x = canvas.width / 2;
                    y = canvas.height - 30;
                    dx = 2;
                    dy = -2;
                    paddleX = (canvas.width - paddleWidth) / 2;
} 
                }
            }
            
            if(rightPressed && paddleX < canvas.width-paddleWidth) {
                paddleX += 7;
            }
            else if(leftPressed && paddleX > 0) {
                paddleX -= 7;
            }
            
            x += dx;
            y += dy;
            requestAnimationFrame(draw);

        }
        //event listeners
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);
    
    
    draw();