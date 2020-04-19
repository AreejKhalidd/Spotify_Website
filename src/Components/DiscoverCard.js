import React from "react";
import "./DiscoverCard.css";

const DiscoverCard = ({ header, photo, description }) => {
  return (
    <a href="/playlist/haha" className="column">
      <div className="card">
        <h3>
          <img alt={header} src={photo} />
        </h3>
        <p className="albumName">{header}</p>
        <p className="albumDescription">{description}</p>
        <button className="playButton">
          <i class="fa">&#xf04b;</i>
        </button>
      </div>
    </a>
  );
};

export default DiscoverCard;
