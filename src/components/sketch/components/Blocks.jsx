import React from "react";
import "../customBlocks";

export default function (props) {
  function mappingfunction(block) {
    return <block type={block} />;
  }
  return <React.Fragment>{props.blocks.map(mappingfunction)}</React.Fragment>;
}
