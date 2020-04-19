import React from "react";
import ReactDOM from "react-dom";
import LikedTracksNavbar from "./LikedTracksNavbar";

it("LikedTracksNavbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LikedTracksNavbar></LikedTracksNavbar>, div);
});
