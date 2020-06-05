import React from "react";
import ReactDOM from "react-dom";
import Library from "./Library";

it("Library Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Library></Library>, div);
});
