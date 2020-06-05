import React from "react";
import "./LikedSong.css";

/**
 *
 * @property {Function} LikedSong - Liked Song that contains Song name, duration, artist name, artist link, album link, album name
 * @param {} library Song name, duration, artist name, artist link, album link, album name
 * @returns {} div that contains Liked song style
 */
const LikedSong = ({
  songName,
  duration,
  artistLink,
  artistName,
  albumLink,
  albumName,
}) => {
  return (
    <div>
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
