import React from "react";
import ReactDOM from "react-dom";
import NewPlaylist from "./NewPlaylist";

it("New playlist page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewPlaylist></NewPlaylist>, div);
});
