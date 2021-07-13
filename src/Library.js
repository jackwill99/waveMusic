import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audio,
  isPlaying,
  setSongs,
  currentSong,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h1 className="libra-title">Library</h1>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            setSongs={setSongs}
            key={song.id}
            setCurrentSong={setCurrentSong}
            audio={audio}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
