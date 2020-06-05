import React from "react";
import ReactDOM from "react-dom";
import CommentWindow from "./Comment";

it("Comment Modal renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CommentWindow></CommentWindow>, div);
});
