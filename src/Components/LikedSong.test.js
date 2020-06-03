import React from "react";
import ReactDOM from "react-dom";
import LikedSong from "./LikedSong";

it("LikedSong renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LikedSong></LikedSong>, div);
});
