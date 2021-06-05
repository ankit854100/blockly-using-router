import React, { useRef } from "react";
import Workspace from "./Workspace";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardArray, cardClickFunction } from "./game";
import blank from "../images/blank.png";
import "./App.css";

export default function App() {
  const grid = useRef();

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", blank);
      card.setAttribute("id", i);
      card.setAttribute("data-id", i);
      card.addEventListener("click", cardClickFunction);
      grid.current.appendChild(card);
    }
  }

  return (
    <div className="wrapper">
      <div className="blocklyWrapper">
        <div className="blocklyContainer">
          <Workspace createBoard={createBoard} />
        </div>
        <div className="rectangle">
          <h3 id="score"></h3>
          <div ref={grid} class="grid"></div>
        </div>
      </div>
    </div>
  );
}
