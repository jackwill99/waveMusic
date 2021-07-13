import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
// import {playAudio} from './util'

function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  setAudio,
  audio,
  songs,
  setSongs,
  setCurrentSong,
}) {
  //Ref
  const audioRef = useRef(null);

  // //*useEffect
  // useEffect(() => {
  //   //*Change Active
  //   const newSongs = songs.map((songCheck) => {
  //     if (songCheck.id === currentSong.id) {
  //       return { ...songCheck, active: true }; //! I think that spreaded object and modify new value
  //     } else {
  //       return { ...songCheck, active: false };
  //     }
  //   });
  //   //? Notice map return a new Array
  //   setSongs(newSongs);
  // }, [currentSong]);

  //Events Handler

  //Replace UseEffect
  const activeSongHandler = (nextPrev) => {
    const newSongs = songs.map((songCheck) => {
      if (songCheck.id === nextPrev.id) {
        return { ...songCheck, active: true }; //! I think that spreaded object and modify new value
      } else {
        return { ...songCheck, active: false };
      }
    });
    //? Notice map return a new Array
    setSongs(newSongs);
  };

  const songEndHandler = async () => {
    const songIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(songIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  const skipTrackHandler = async (direction) => {
    const songIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(songIndex + 1) % songs.length]);
      activeSongHandler(songs[(songIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if (songIndex === 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeSongHandler(songs[songs.length - 1]);

        // playAudio(isPlaying, audio); //* this for because of returning, won't work continue function
        if (isPlaying) audioRef.current.play();

        return;
      }
      await setCurrentSong(songs[songIndex - 1]);
      activeSongHandler(songs[songs.length - 1]);
    }
    // playAudio(isPlaying, audio);
    if (isPlaying) audioRef.current.play();
  };

  const playSongHandler = async () => {
    await setAudio(audioRef);
    if (isPlaying) {
      await audioRef.current.pause();
      await setIsPlaying(!isPlaying);
    } else {
      await audioRef.current.play();
      await setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = async (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animtaion = Math.round((roundedCurrent / roundedDuration) * 100);
    await setSongInfo({
      currentTime: current,
      duration: duration,
      animationPercentage: animtaion,
    });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragInputHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //Song Info
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const track = {
    transform: `translateX(${songInfo.animationPercentage || 0}%)`,
    /* In a miliSecond, songInfo.animationPercentage is NaN because before get songInfo. After that, number appears */
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
            onChange={dragInputHandler}
          ></input>
          <div className="animate-track" style={track}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
        {/* In a miliSecond, p tag is NaN because before get songInfo.duration. After that, number appears */}
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
      {/* onLoadedMetadata is when page is refresh or load, get data from the element  */}
    </div>
  );
}

export default Player;
