export const playAudio = (isPlaying, audio) => {
  if (isPlaying) {
    //console.log(audio.current.play())
    const playPromise = audio.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audio.current.play();
      });
    }
  }
};

// util is not need now! Because of using async await. Before getting the audio data, setCurrentSong, setSongs and etc... are waiting util get audio data
