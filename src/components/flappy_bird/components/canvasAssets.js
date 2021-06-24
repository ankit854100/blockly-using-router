import { ctx } from "./App";
import { newCode } from "./Workspace";
import birdImage from "../images/bird.png";
import bgImage from "../images/bg.png";
import fgImage from "../images/fg.png";
import northImage from "../images/pipeNorth.png";
import southImage from "../images/pipeSouth.png";

// import flySound from "../sound/fly.mp3";
// import scoreSound from "../sound/score.mp3";

let cvs = { height: 512, width: 288 };

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = birdImage;
bg.src = bgImage;
fg.src = fgImage;
pipeNorth.src = northImage;
pipeSouth.src = southImage;

// some variables
var myReq = null;
var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;
let gameEnd = false;
let keyPressed = false;

// audio files

// var fly = new Audio();
// var scor = new Audio();

// fly.src = flySound;
// scor.src = scoreSound;

// on key down

document.addEventListener("keydown", function (e) {
  keyPressed = true;
});

document.addEventListener("keyup", function () {
  keyPressed = false;
});

function moveUp() {
  bY -= 5;
  // keyPressed = false;
  // fly.play();
}

// pipe coordinates

var pipe = [];

pipe[0] = {
  x: cvs.width,
  y: 0
};

// draw images

function draw() {
  try {
    eval(newCode);
  } catch (e) {
    alert(e);
  }
}

function gameOver() {
  ctx.fillStyle = "#000";
  ctx.font = "40px Verdana";
  ctx.fillText("Game Over", cvs.width / 2 - 100, cvs.height / 2);
}

function resetGame() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  constant = 0;
  score = 0;
  bX = 10;
  bY = 150;
  pipe.length = 0;
  gravity = 1.5;
  pipe[0] = {
    x: cvs.width,
    y: 0
  };
  gameEnd = false;
}

//images functions
//background image
function drawBg() {
  ctx.drawImage(bg, 0, 0);
}
//pipes
function drawNorthPipes(i) {
  ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
}

function drawSouthPipes(i) {
  ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
}

//move pipes
function movePipes(i) {
  pipe[i].x--;
  if (pipe[i].x === 125) {
    pipe.push({
      x: cvs.width,
      y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
    });
  }
}

//birds
function drawBird() {
  ctx.drawImage(bird, bX, bY);
}

//ground
function drawGround() {
  ctx.drawImage(fg, 0, cvs.height - fg.height);
}

//score
function drawScore() {
  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Score : " + score, 10, cvs.height - 20);
}

//collision detection function

function didCollide(i) {
  let val =
    bX + bird.width >= pipe[i].x &&
    bX <= pipe[i].x + pipeNorth.width &&
    (bY <= pipe[i].y + pipeNorth.height ||
      bY + bird.height >= pipe[i].y + constant);

  return val;
}

function groundIsTOuched() {
  return bY + bird.height >= cvs.height - fg.height;
}

//stop game
function stopGame() {
  cancelAnimationFrame(myReq);
  gameEnd = true;
}

//is block passed a pipe

function isPipePassed(i) {
  let val = pipe[i].x === 5;
  return val;
}

export default draw;
export { resetGame };

// ctx.drawImage(bg, 0, 0);

//   for (var i = 0; i < pipe.length; i++) {
//     constant = pipeNorth.height + gap;
//     ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
//     ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

//     pipe[i].x--;

//     if (pipe[i].x === 125) {
//       pipe.push({
//         x: cvs.width,
//         y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
//       });
//     }

//     // detect collision

//     if (
//       (bX + bird.width >= pipe[i].x &&
//         bX <= pipe[i].x + pipeNorth.width &&
//         (bY <= pipe[i].y + pipeNorth.height ||
//           bY + bird.height >= pipe[i].y + constant)) ||
//       bY + bird.height >= cvs.height - fg.height
//     ) {
//       cancelAnimationFrame(myReq);
//       gameEnd = true;
//     }

//     if (pipe[i].x === 5) {
//       score++;
//       // scor.play();
//     }
//   }

//   ctx.drawImage(fg, 0, cvs.height - fg.height);

//   ctx.drawImage(bird, bX, bY);

//   if (gameEnd) {
//     gameOver();
//   }

//   bY += gravity;

//   ctx.fillStyle = "#000";
//   ctx.font = "20px Verdana";
//   ctx.fillText("Score : " + score, 10, cvs.height - 20);

//   if (!gameEnd) myReq = requestAnimationFrame(draw);
