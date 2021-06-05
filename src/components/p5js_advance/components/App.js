import React, { useState } from "react";
import Workspace from "./Workspace";

let html = require("../docs/iFrame.html");
let css = require("../docs/iFrame.css");

export default function App() {
  const [srcDoc, setSrcDoc] = useState("");
  const [WorkspaceStatus, setStatus] = useState("start");

  function frameInject(code) {
    setStatus("restart");
    setSrcDoc(
      `<html><body>${html}</body><style>${css}</style><script>${code}</script></html>`
    );
  }
  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="blocklyContainer">
          <Workspace status={WorkspaceStatus} setSrc={frameInject} />
        </div>
        <div className="iframeContainer">
          <iframe
            id="blocklyIframe"
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts allow-same-origin"
            allow="fullscreen"
            frameBorder="0"
            style={{ display: "inline" }}
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
}

//  <div className="blocklyContainer">
//         <Workspace status={WorkspaceStatus} setSrc={frameInject} />
//       </div>
//       <div className="iframeContainer">
//         <iframe
//           id="blocklyIframe"
//           srcDoc={srcDoc}
//           title="output"
//           sandbox="allow-scripts allow-same-origin"
//           allow="fullscreen"
//           frameBorder="0"
//           style={{ display: "inline" }}
//         ></iframe>
//       </div>
