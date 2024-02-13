const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      let x = canvas.width / 2;
      let y = canvas.height - 30;
      let dx = 2;
      let dy = -2;
      var ballRadius = 10;
      const paddleHeight = 10;
      const paddleWidth = 75;
      let rightPressed = false;
      let leftPressed = false;
      let paddleX = (canvas.width- paddleWidth) / 2; 
      const brickRowCount = 3;
      const brickColumnCount = 5;
      const brickWidth = 80;  // Adjust the width of the bricks
      const brickHeight = 20;  // Adjust the height of the bricks
      const brickPadding = 5;  // Adjust the padding between bricks
      const brickOffsetTop =30;
      const brickOffsetLeft = 180;
        var score = 0;
        var lives = 3;
       
       
     let ball = new Ball(0,0,2,-2,ballRadius, color = "orange");

      
      
      const bricks = new Bricks(brickColumnCount, brickRowCount);


      const scoreLabel = new GameLabel('Score ', 8, 20);
      const livesLabel = new GameLabel('Lives', canvas.width - 80, 20);
      livesLabel.value =3;






     

     
     const paddle = new Paddle();

     
    
    
    document.addEventListener("mousemove", mouseMoveHandler, false);
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
      
        for (let c = 0; c < bricks.cols; c+=1) {
            for (let r = 0; r < bricks.rows; r+=1) {
                const brick = bricks.bricks[c][r];
                if (brick.status === 1) {
                    if (ball.x > brick.x && 
                        ball.x < brick.x + brickWidth && 
                        ball.y > brick.y && ball.y < brick.y + brickHeight) {
                        ball.dy = -ball.dy;
                        brick.status = 0;

                        scoreLabel.value +=1


                        if(scoreLabel.value === brickRowCount * brickColumnCount){
                            alert("YOU WIN CONGRATULATIONS!");
                            document.location.reload();
                        }
                    }
                }
            }   
        }
    }
    
       
       

    

    
       function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            bricks.render(ctx);
            
            ball.render(ctx);
            ball.moveTo(x, y);
            paddle.render(ctx);
            collisionDetection();
            x+=dx;
            y+=dy;
            
            
            scoreLabel.render(ctx);
            livesLabel.render(ctx);

            

            
            if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
            if (y + dy < ballRadius) {
               dy = -dy;
            }
            else if (y + dy > canvas.height - ballRadius) {
                if (x > paddleX && x < paddleX + paddleWidth) {
                    if (y > canvas.height - paddleHeight) {
                        dy = -dy;
                        
                    }
                    
                } else {
                    livesLabel.value -=1;
                if(livesLabel.value < 1){
                    alert("GAME OVER");
                    document.location.reload();
                    clearInterval(interval); // Needed for Chrome to end game
                }else{
                  x = canvas.width / 2;
                  y = canvas.height - 30;
                  paddleX = (canvas.width - paddleWidth) / 2;
                  dx = 2;
                  dy = -2;
                }
            }
        }
            
            if(rightPressed && paddleX < canvas.width-paddleWidth) {
                paddleX += 7;
            }
            else if(leftPressed && paddleX > 0) {
                paddleX -= 7;
            }
            
            
            requestAnimationFrame(draw);
        }
        
        draw();