import React from "react";
import ReactDOM from "react-dom";
import CollectionNavbar from "./CollectionNavbar";

it("CollectionNavbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CollectionNavbar></CollectionNavbar>, div);
});
