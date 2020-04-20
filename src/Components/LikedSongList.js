import React from "react";
import LikedSong from "./LikedSong";

const LikedSongList = ({ Cards }) => {
  const cardComponents = Cards.map((user) => {
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
