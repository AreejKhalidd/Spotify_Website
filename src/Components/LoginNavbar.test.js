import React from "react";
import ReactDOM from "react-dom";
import LoginNavbar from "./LoginNavbar";

it("LoginNavbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginNavbar></LoginNavbar>, div);
});
