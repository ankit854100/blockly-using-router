const dimension = { w: 500, h: 500 };

let drawing = [];
let isDrawn = [];
let factor = 50;
let rows = dimension.w / factor;
let col = dimension.h / factor;

let cur = { x: 10, y: 200 };
let canCurr = { x: 10, y: 200 };
let next = { x: 0, y: 0 };
let curAngle = 0;
let color = "#000";

function drawGrid(ctx) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < col; j++) {
      ctx.beginPath();
      ctx.strokeStyle = "#000";
      ctx.strokeRect(j * factor, i * factor, factor, factor);
      ctx.closePath();
    }
  }
}

function drawCharacter(ctx) {
  let image = new Image();
  image.src = "https://image.flaticon.com/icons/png/512/2316/2316047.png";

  ctx.drawImage(image, cur.x, cur.y, factor, factor);
}

function drawingPath(ctx) {
  let pos = { x: canCurr.x, y: canCurr.y };
  for (let i = 0; i < isDrawn.length; i++) {
    if (isDrawn[i] === 1) {
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      ctx.lineTo(drawing[i].x, drawing[i].y);
      ctx.strokeStyle = color;
      ctx.stroke();
      ctx.closePath();
    }
    pos.x = drawing[i].x;
    pos.y = drawing[i].y;
  }
}

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function setColor(given) {
  color = given;
}

async function moveForward(pixels) {
  await sleep(500);
  next.x = cur.x + pixels * Math.cos((Math.PI * curAngle) / 180);
  next.y = cur.y + pixels * Math.sin((Math.PI * curAngle) / 180);
  drawing.push({ x: next.x, y: next.y });
  isDrawn.push(1);
  cur.x = next.x;
  cur.y = next.y;
}

async function moveBackward(pixels) {
  await sleep(500);
  next.x = cur.x - pixels * Math.cos((Math.PI * curAngle) / 180);
  next.y = cur.y - pixels * Math.sin((Math.PI * curAngle) / 180);
  drawing.push({ x: next.x, y: next.y });
  isDrawn.push(1);
  cur.x = next.x;
  cur.y = next.y;
}

async function jumpForward(pixels) {
  await sleep(500);
  next.x = cur.x + pixels * Math.cos((Math.PI * curAngle) / 180);
  next.y = cur.y + pixels * Math.sin((Math.PI * curAngle) / 180);
  drawing.push({ x: next.x, y: next.y });
  isDrawn.push(0);
  // canCurr.x = next.x;
  // canCurr.y = next.y;
  cur.x = next.x;
  cur.y = next.y;
}

async function jumpBackward(pixels) {
  await sleep(500);
  next.x = cur.x - pixels * Math.cos((Math.PI * curAngle) / 180);
  next.y = cur.y - pixels * Math.sin((Math.PI * curAngle) / 180);
  drawing.push({ x: next.x, y: next.y });
  isDrawn.push(0);
  // canCurr.x = next.x;
  // canCurr.y = next.y;
  cur.x = next.x;
  cur.y = next.y;
}

async function moveLeft(degree) {
  await sleep(500);
  curAngle -= degree;
}

async function moveRight(degree) {
  await sleep(500);
  curAngle += degree;
}

function restoreGame() {
  cur = { x: 10, y: 200 };
  canCurr = { x: 10, y: 200 };
  next = { x: 0, y: 0 };
  curAngle = 0;
  drawing.length = 0;
  isDrawn.length = 0;
}

export default dimension;
export {
  drawCharacter,
  drawGrid,
  drawingPath,
  moveForward,
  moveBackward,
  moveLeft,
  moveRight,
  jumpForward,
  jumpBackward,
  setColor,
  restoreGame
};
