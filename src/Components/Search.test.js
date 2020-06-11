import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

it("Default search page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Search></Search>, div);
});
