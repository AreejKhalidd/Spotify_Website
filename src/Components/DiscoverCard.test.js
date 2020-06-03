import React from "react";
import ReactDOM from "react-dom";
import DiscoverCard from "./DiscoverCard";

it("DiscoverCard renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DiscoverCard></DiscoverCard>, div);
});
