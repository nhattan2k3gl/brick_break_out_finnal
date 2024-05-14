let ctx;
/// board
let blackBoard = {
    height: 500,
    with: 500
}
//function draw board
function draw_board(){
    let board = document.getElementById("board");
    board.height = 500;
    board.width = 500;
    ctx = board.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(10, 0, 500, 500)
}
draw_board();