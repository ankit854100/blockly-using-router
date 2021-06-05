import { keys, gravity, gamePiece } from "./App";
let dimension = { w: 800, h: 500 };

let obstaclesArray = [];
let gameSpeed = 3;
let isDraw = false;
let isJump = false;
let isDuck = false;

function setIsDraw() {
  isDraw = true;
}

function setIsJump() {
  isJump = true;
}

function setIsDuck() {
  isDuck = true;
}

function component(ctx, x, y, c, w, h) {
  this.x = x;
  this.y = y;
  this.c = c;
  this.w = w;
  this.h = h;
  this.dy = 0;
  this.grounded = false;
  this.jumpTimer = 0;
  this.jumpForce = 12;
  this.originalHeight = h;

  this.duck = function () {
    this.h = this.originalHeight / 2;
  };

  this.jump = function () {
    if (this.grounded === true && this.jumpTimer === 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
      // console.log(this.dy);
    } else if (this.jumpTimer > 0 && this.jumpTimer < 12) {
      this.jumpTimer++;
      this.dy = -this.jumpForce - this.jumpTimer / 50;
    }
  };

  this.draw = function () {
    let image = new Image();
    image.src = "https://www.flaticon.com/svg/static/icons/svg/528/528076.svg";
    ctx.beginPath();
    ctx.drawImage(image, this.x, this.y, this.w, this.h);
    ctx.closePath();
  };

  this.update = function () {
    if (keys["Space"] || keys["ArrowUp"]) {
      // this.jump();
    } else {
      this.jumpTimer = 0;
    }

    if (keys["ShiftLeft"] || keys["ArrowDown"]) {
      // this.h = this.originalHeight / 2;
      // this.duck();
    } else {
      this.h = this.originalHeight;
    }

    for (let i = 0; i < obstaclesArray.length; i++) {
      if (obstaclesArray[i].obstype === 1) {
        if (obstaclesArray[i].x - 30 <= this.x + this.w) {
          // console.log("working");
          if (isDuck) this.duck();
        }
        // else {
        //   this.h = this.originalHeight;
        // }
      } else {
        if (obstaclesArray[i].x - 30 <= this.x + this.w) {
          if (isJump) this.jump();
        } else {
          this.jumpTimer = 0;
        }
      }
    }

    this.y += this.dy;

    // gravity
    if (this.y + this.h < dimension.h) {
      this.dy += gravity;
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = dimension.h - this.h;
    }
    if (isDraw) this.draw();
  };
}

function obstacles(ctx, x, y, w, h, obstype, url, type) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.obstype = obstype;
  this.type = type;

  this.dx = -gameSpeed;

  this.draw = function () {
    let image = new Image();
    image.src = url;
    ctx.beginPath();
    ctx.drawImage(image, this.x, this.y, this.w, this.h);
    ctx.closePath();

    if (this.type === "background") {
      ctx.beginPath();
      ctx.drawImage(image, this.x + this.w, this.y, this.w, this.h);
      ctx.closePath();
    }

    if (this.type === "text") {
      ctx.font = this.w + " " + this.h;
      ctx.fillStyle = "#000";
      ctx.fillText(this.text, this.x, this.y);
    }
  };

  this.update = function () {
    this.x += this.dx;
    if (this.type === "background") {
      if (this.x <= -dimension.w) {
        this.x = 0;
      }
    }
    if (isDraw) this.draw();
    this.dx = -gameSpeed;
  };
}

function spawnObtacles(ctx) {
  let size = RandomIntRange(20, 50);
  let type = RandomIntRange(0, 1);
  let url = "https://www.flaticon.com/svg/static/icons/svg/459/459464.svg";
  if (type === 1) {
    // url = "https://www.flaticon.com/svg/static/icons/svg/2918/2918657.svg";
    url = "https://www.flaticon.com/svg/static/icons/svg/2918/2918588.svg";
  }
  let obstacle = new obstacles(
    ctx,
    dimension.w + size,
    dimension.h - size,
    size,
    size,
    type,
    url,
    "obs"
  );

  if (type === 1) {
    obstacle.y -= gamePiece.originalHeight - 10;
  }
  obstaclesArray.push(obstacle);
}

function RandomIntRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default dimension;
export {
  setIsDraw,
  setIsJump,
  setIsDuck,
  component,
  obstacles,
  obstaclesArray,
  spawnObtacles,
  RandomIntRange
};
