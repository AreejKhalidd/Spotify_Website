import React from "react";
import RandomSong from "./RandomSong";

const RandomSongList = ({ Songs }) => {
  const cardComponents = Songs.map((user) => {
    return (
      <RandomSong
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

export default RandomSongList;
