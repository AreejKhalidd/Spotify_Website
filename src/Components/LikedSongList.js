import React from "react";
import LikedSong from "./LikedSong";

/**
 *
 * @property {Function} LikedSongList -list that contains all songs that user likes
 * @param {} Songs
 * @returns {} LikedSong with it's id, song name, deuration, artist name and link, album name and link
 */
const LikedSongList = ({ Songs }) => {
  const cardComponents = Songs.map((user) => {
    return (
      <LikedSong
        key={user.id}
        songName={user.songName}
        duration={user.duration}
        artistLink={user.artistLink}
        artistName={user.artistName}
        albumLink={user.albumLink}
        albumName={user.albumName}
      />
    );
  });
  return <div>{cardComponents}</div>;
};

export default LikedSongList;
