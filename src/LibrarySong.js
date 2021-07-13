import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
// import { playAudio } from "./util";

const LibrarySong = ({
  song,
  setCurrentSong,
  audio,
  isPlaying,
  setSongs,
  songs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    //Even song select, song can't play automatically. This code is for that -->>
    // playAudio(isPlaying, audio);
    if (isPlaying) audio.current.play();

    //Change Active
    const newSongs = songs.map((songCheck) => {
      if (songCheck.id === song.id) {
        return { ...songCheck, active: true }; //! I think that spreaded object and modify new value
      } else {
        return { ...songCheck, active: false };
      }
    });
    //? Notice map return a new Array

    setSongs(newSongs);
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <FontAwesomeIcon icon={faMusic} size="2x" className="music-icon" />
      <div className="song-info">
        <h4>Title : {song.name}</h4>
        <h5>Artist : {song.artist}</h5>
      </div>
    </div>
  );
};

export default LibrarySong;
