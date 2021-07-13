import React, { useState } from "react";
import "./styles/app.scss";
import Player from "./Player";
import Song from "./Song";
import data from "./data";
import Library from "./Library";
import Nav from "./Nav";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(""); // audio is refrence to the audio tag only.
  // When SongLibrary select , change the audio src . So it works this state

  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active-move" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audio={audio}
        setAudio={setAudio}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audio={audio}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
