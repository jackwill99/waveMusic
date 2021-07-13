import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <h1>{currentSong.name}</h1>
      <h1>{currentSong.artist}</h1>
    </div>
  );
};

export default Song;
