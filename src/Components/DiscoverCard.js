import React from "react";
import "./DiscoverCard.css";
/**
 *
 * @property {Function} DiscoverCard - Discover Card that contains library image, header and  description
 * @param {} library image , Header, Description, Link
 * @returns {} div that contains card style
 */
const DiscoverCard = ({ img, header, description, link }) => {
  return (
    <div className="column">
      <a href={link} className="card">
        <h3>
          <img alt={header} src={img} />
        </h3>
        <h3 className="albumName">{header}</h3>
        <p className="albumDescription">{description}</p>
        <button className="playButton">
          <i class="fa">&#xf04b;</i>
        </button>
      </a>
    </div>
  );
};

export default DiscoverCard;
