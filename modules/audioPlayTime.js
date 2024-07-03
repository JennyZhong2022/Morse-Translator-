


// to control how long is the audio sound and when to start

const audioPlayTime = (audioName, currentTime, timeLength) => {
  audioName.currentTime = currentTime;
 audioName.play();
  setTimeout(() => {
    audioName.pause();
    audioName.currentTime = currentTime;
  }, timeLength);
};

export default audioPlayTime