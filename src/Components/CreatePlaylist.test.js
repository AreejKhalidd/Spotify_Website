import React from "react";
import ReactDOM from "react-dom";
import CreatePlaylist from "./CreatePlaylist";

it("Create Playlist Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreatePlaylist></CreatePlaylist>, div);
});
