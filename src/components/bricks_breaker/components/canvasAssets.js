import { ctx } from "./App";
// import { newCode } from "./Workspace";

const dimension = { w: 350, h: 350 };

let code;
let collidedBlock;
let bg = "white";
let myReq;
var score = 0;
var lives = 3;
// ball variables
var x = dimension.w / 2;
var y = dimension.h - 20;
var dx = 3;
var dy = -3;
var ballRadius = 10;

// paddle variables
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (dimension.w - paddleWidth) / 2;

// button pressed variables
var rightPressed = false;
var leftPressed = false;

// bricks variables
var brickRowCount = 3;
var brickColumnCount = 4;
var brickHeight = 20;
var brickWidth = 75;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 12;
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1
    };
  }
}

function setBackground(color) {
  bg = color;
}

function keydownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  }
  if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyupHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  }
  if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function collision() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          collidedBlock = b;
          return 1;
        }
      }
    }
  }

  return 0;
}
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, dimension.h - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawBall() {
  ctx.beginPath();
  ctx.fillStyle = "#0095DD";
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("lives: " + lives, dimension.w - 65, 20);
}

function start(newCode) {
  code = newCode;
  draw();
}
function draw() {
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
}

function win() {
  code = "";
  clearCanvas();
  ctx.font = "32px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("You win:)", 8, 50);
}

function lose() {
  code = "";
  clearCanvas();
  ctx.font = "32px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("You lose:(" + score, 8, 50);
}

function clearCanvas() {
  ctx.clearRect(0, 0, dimension.w, dimension.h);
}

function reset() {
  cancelAnimationFrame(myReq);
  // clearTimeout(myReq);
  score = 0;
  lives = 3;
  // ball variables
  x = dimension.w / 2;
  y = dimension.h - 20;
  dx = 3;
  dy = -3;
  paddleX = (dimension.w - paddleWidth) / 2;
  for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
      bricks[c][r] = {
        x: 0,
        y: 0,
        status: 1
      };
    }
  }
}

export default dimension;
export { draw, keydownHandler, keyupHandler, bg, clearCanvas, reset, start };

// ctx.clearRect(0, 0, dimension.w, dimension.h);
// drawBall();
// drawPaddle();
// collisionDetection();
// drawBricks();
// drawScore();
// drawLives();
// if (x + dx > dimension.w - ballRadius || x + dx < ballRadius) {
//   dx = -dx;
// }
// if (y + dy < ballRadius) {
//   dy = -dy;
// } else if (y + dy > dimension.h - ballRadius) {
//   if (x > paddleX && x < paddleX + paddleWidth) {
//     dy = -dy;
//     dx += dx / 7;
//   } else {
//     lives--;
// if (!lives) {
//   cancelAnimationFrame(myReq);
// } else {
//   x = dimension.w / 2;
//   y = dimension.h - 30;
//   dx = 3;
//   dy = -3;
//   paddleX = (dimension.w - paddleWidth) / 2;
// }
//   }
// }
// if (rightPressed) {
// paddleX += 7;
// if (paddleX + paddleWidth > dimension.w) {
//   paddleX = dimension.w - paddleWidth;
// }
// }
// if (leftPressed) {
//   paddleX += -7;
//   if (paddleX < 0) {
//     paddleX = 0;
//   }
// }
// x += dx;
// y += dy;
// myReq = requestAnimationFrame(draw);
// myReq = setInterval(draw, 200);
