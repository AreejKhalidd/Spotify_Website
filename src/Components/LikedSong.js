import React from "react";
import "./LikedSong.css";

const LikedSong = ({
  songName,
  duration,
  artistLink,
  artistName,
  albumLink,
  albumName,
}) => {
  return (
    <div className="col-xs-12 col-lg-9 col-xl-8">
      <ul className="playlist">
        <li>
          <i className="fa fa-music music"></i>
          <i className="fa fa-play play"></i>
          <span>{songName}</span>
          <i className="duration">{duration}</i>
          <br />
          <i>
            <a href={artistLink}>{artistName}&nbsp;&nbsp;</a>
            <a href={albumLink}>{albumName}</a>
          </i>
        </li>
      </ul>
    </div>
  );
};
export default LikedSong;
