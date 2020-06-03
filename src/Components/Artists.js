import React from "react";
import "./Artist.css";
const Artists = () => {
  return (
    <div className="artists-page">
      <i className="fa fa-user-plus"></i>
      <h1 className="welcome">Your artists will appear here.</h1>
      <p>Follow artists you love to add them to Your library.</p>
      <a href="/search" className="searchButton">
        SEARCH
      </a>
    </div>
  );
};
export default Artists;
