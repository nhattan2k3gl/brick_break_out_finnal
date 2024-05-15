let ctx;

/// board
let blackBoard = {
    height: 600,
    width: 600
}

// ball
let ball = {
    sx: 452,
    sy: 2,
    sw: 22,
    sh: 22,
    x: 250,
    y: 250, 
    width: 20,
    height: 20,
    velocityX : 3,
    velocityY: 2
}
//function draw board
function draw_board(){
    let board = document.getElementById("board");
    board.height = blackBoard.height;
    board.width = blackBoard.width;
    ctx = board.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, blackBoard.width, blackBoard.height)
}

// function draw ball 
function draw_ball(){
    ctx.drawImage(break_out, ball.sx, ball.sy, ball.sw, ball.sh, ball.x, ball.y, ball.width, ball.height);
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // wall
    if(blackBoard.width <= (ball.x + ball.width)  || ball.x <= 5){
        ball.velocityX *= -1;
    }else if (blackBoard.height <= (ball.y + ball.height) || ball.y <= 5){
        ball.velocityY *= -1;
    }
}

// start
function start (){
    requestAnimationFrame(start);
    draw_board();
    draw_ball();
}
start();
