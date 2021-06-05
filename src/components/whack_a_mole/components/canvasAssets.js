import { ctx } from "./App";
import { newCode } from "./Workspace";
import mole from "../images/mole.png";
const dimension = { w: 350, h: 500 };

let rows = 3;
let cols = 3;
const factor = 100;
const possibleXY = [0, 100, 200];
let posX = 100;
let posY = 100;
let time = 20;
let gameTimeout;
let timeOut;
let score = 0;
let isChange = true;
let timer = true;

function changePosition() {
  posX = Math.floor(Math.random() * 3);
  posY = Math.floor(Math.random() * 3);
}

function drawGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ctx.beginPath();
      ctx.fillStyle = "#CA8D42";
      ctx.strokeStyle = "lightgrey";
      ctx.fillRect(j * factor, i * factor, factor, factor);
      ctx.strokeRect(j * factor, i * factor, factor, factor);
      ctx.closePath();
    }
  }
}

function drawImage() {
  // let image = new Image();
  // image.src = mole;
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(possibleXY[posX], possibleXY[posY], factor, factor);
  // ctx.drawImage(image, possibleXY[posX], possibleXY[posY], factor, factor);
  ctx.closePath();
}

function drawScore() {
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "black";
  // ctx.textAlign = "center";
  ctx.fillText("score: " + score, 20, 350);
}

function drawTime() {
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "black";
  // ctx.textAlign = "center";
  ctx.fillText("time left: " + time, 20, 400);
}

function gameOver() {
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "black";
  // ctx.textAlign = "center";
  ctx.fillText("Game over", 300 / 2 - 60, 300 / 2);
}

function clear() {
  ctx.clearRect(0, 0, dimension.w, dimension.h);
}

function hit(hammerX, hammerY) {
  if (
    hammerX >= possibleXY[posX] &&
    hammerX <= possibleXY[posX] + factor &&
    hammerY >= possibleXY[posY] &&
    hammerY <= possibleXY[posY] + factor
  ) {
    // console.log("hit");
    score++;
    changePosition();
    clear();
    drawGrid();
    changePosition();
    drawImage();
    drawScore();
    drawTime();
  }
}

function play() {
  clear();
  drawGrid();
  drawScore();
  drawTime();
  changePosition();
  drawImage();
  // main();
}

function main() {
  // gameTimeout = setTimeout(function onTick() {
  //   play();
  //   time--;
  //   if (time === -1) {
  //     isChange = false;
  //     gameOver();
  //     clearTimeout(gameTimeout);
  //     return;
  //   }
  //   main();
  // }, 1000);
  try {
    eval(newCode);
  } catch (e) {
    alert(e);
  }
  // drawImage();
}

function countTimer() {
  timeOut = setTimeout(function onTick() {
    time--;
    if (time === -1) {
      isChange = false;
      gameOver();
      clearTimeout(timeOut);
      clearTimeout(gameTimeout);
      return;
    }
    countTimer();
  }, 1000);
}

function resetGame() {
  clearTimeout(timeOut);
  clearTimeout(gameTimeout);
  clear();
  time = 20;
  score = 0;
  isChange = true;
  timer = true;
}

export default dimension;
export {
  drawGrid,
  drawImage,
  changePosition,
  main,
  hit,
  countTimer,
  isChange,
  resetGame,
  play
};
