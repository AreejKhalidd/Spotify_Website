import React from "react";
import RandomSong from "./RandomSong";
import { findAllByDisplayValue } from "@testing-library/react";

const RandomSongList = (props) => {
  const cardComponents = props.Songs.map(( user, idx) => {
    
    return (
      <RandomSong
        key={idx}
        songName={user.songName}
        duration={user.duration}
        artistLink={user.artistLink}
        artistName={user.artistName}
        albumLink={user.albumLink}
        albumName={user.albumName}
        songRef={user.songRef}
        isPremium = {props.isPremium}
      />
    );
  });
  return <div>{cardComponents}</div>;
};

export default RandomSongList;
