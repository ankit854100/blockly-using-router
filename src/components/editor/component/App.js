import React from "react";
import Workspace from "./Workspace";
import "./App.css";

export default function App() {
  return (
    <div className="editor-app">
      <h4 className="editor-title">Say hello to blockly editor</h4>
      <Workspace />
    </div>
  );
}
