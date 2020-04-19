import React from "react";
import ReactDOM from "react-dom";
import HomeNavbar from "./HomeNavbar";

it("HomeNavbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomeNavbar></HomeNavbar>, div);
});
