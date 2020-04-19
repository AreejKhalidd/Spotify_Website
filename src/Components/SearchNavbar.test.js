import React from "react";
import ReactDOM from "react-dom";
import SearchNavbar from "./SearchNavbar";

it("SearchNavbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchNavbar></SearchNavbar>, div);
});
