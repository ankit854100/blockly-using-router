import React, { useEffect, useRef } from "react";
import dimension, {
  component,
  obstacles,
  obstaclesArray,
  spawnObtacles,
  RandomIntRange
} from "./game";
import Workspace from "./Workspace";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

let ctx;
let keys = {};
let gravity = 0.5;
let gamePiece;
let spawnTimer = 0;
// let initialSpawnTimer = RandomIntRange(100, 200);
let gameSpeed = 3;
let cont = true;
let background;
// let score;
// let scoreValue = 0;

export default function App() {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    canvas.width = dimension.w;
    canvas.height = 550;

    ctx = canvas.getContext("2d");
    // main();
  });

  document.addEventListener("keydown", function (e) {
    keys[e.code] = true;
  });

  document.addEventListener("keyup", function (e) {
    keys[e.code] = false;
  });

  function handleClick() {
    main();
  }

  function main() {
    gamePiece = new component(ctx, 20, 300, "red", 30, 30);
    background = new obstacles(
      ctx,
      0,
      0,
      dimension.w,
      550,
      "#000",
      "https://image.freepik.com/free-vector/cartoon-computer-games-night-forest-landscape-plant-green-natural-environment-wood-grass_1284-41530.jpg",
      "background"
    );

    update();
  }

  function update() {
    ctx.clearRect(0, 0, dimension.w, dimension.h);
    background.update();
    gamePiece.update();

    spawnTimer--;
    if (spawnTimer <= 0) {
      spawnObtacles(ctx);
      spawnTimer = RandomIntRange(80, 200) - gameSpeed * 8;

      if (spawnTimer < 60) spawnTimer = 60;
    }

    for (let i = 0; i < obstaclesArray.length; i++) {
      let o = obstaclesArray[i];

      if (o.x + o.w < 0) {
        obstaclesArray.splice(i, 1);
      }

      if (
        gamePiece.x < o.x + o.w &&
        gamePiece.x + gamePiece.w > o.x &&
        gamePiece.y < o.y + o.h &&
        gamePiece.y + gamePiece.h > o.y
      ) {
        cont = false;
        obstaclesArray.length = 0;
        gamePiece.y = dimension.h - gamePiece.originalHeight;
        gamePiece.dy = 0;
        gameSpeed = 3;
      }

      o.update();
    }

    gameSpeed += 0.01;
    if (cont) {
      requestAnimationFrame(update);
    }
  }
  return (
    <div className="top-wrapper">
      <div className="instruction-container"></div>
      <div className="blocklyWrapper">
        <div className="blocklyContainer">
          <Workspace fun={handleClick} />
        </div>
        <div className="rectangle">
          <canvas ref={ref} id="canvas" />
        </div>
      </div>
    </div>
  );
}

export { keys, gravity, gamePiece };
