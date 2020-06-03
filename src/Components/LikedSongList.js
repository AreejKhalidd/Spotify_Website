import React from "react";
import LikedSong from "./LikedSong";

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
