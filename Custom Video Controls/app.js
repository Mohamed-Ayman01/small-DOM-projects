let videoTag = document.querySelector("video");
videoTag.volume = 0;

// display video current Time
let currentTimeLine = document.querySelector(".current-time");
videoTag.onplay = () => {
  setInterval(() => {
    currentTimeLine.style.width = `${(videoTag.currentTime * 100) / videoTag.duration}%`;
  }, 1e3);
};

// Video State Controls
const pauseBtn = document.querySelector(".pause");
const playBtn = document.querySelector(".play");
const replayBtn = document.querySelector(".replay");
const loopBtn = document.querySelector(".loop");

pauseBtn.addEventListener("click", () => {
  videoTag.pause();

  pauseBtn.classList.add("active");

  if (playBtn.classList.contains("active")) {
    playBtn.classList.remove("active");
  }
});

playBtn.addEventListener("click", () => {
  videoTag.play();

  playBtn.classList.add("active");

  if (pauseBtn.classList.contains("active")) {
    pauseBtn.classList.remove("active");
  }
});

replayBtn.addEventListener("click", () => {
  videoTag.currentTime = 0;
});

loopBtn.addEventListener("click", () => {
  if (videoTag.loop === false) {
    videoTag.loop = true;

    loopBtn.classList.add("active");
  } else {
    videoTag.loop = false;

    loopBtn.classList.remove("active");
  }
});

// Video Volumne Controls
const mute_unmuteBtn = document.querySelector(".mute-unmute");
const volumeUp = document.querySelector(".volume-up");
const volumeDown = document.querySelector(".volume-down");
const showVolumeSpan = document.querySelector(".current-volume span");

mute_unmuteBtn.addEventListener("click", () => {
  if (videoTag.muted === false) {
    videoTag.muted = true;
    mute_unmuteBtn.classList.add("active");
    mute_unmuteBtn.children[0].className = "fas fa-volume-mute";
  } else {
    videoTag.muted = false;
    mute_unmuteBtn.classList.remove("active");
    mute_unmuteBtn.children[0].className = "fas fa-volume-up";
  }

});

volumeUp.addEventListener("click", () => {
  if (videoTag.volume <= 0.9) {
    videoTag.volume += 0.1;
  }
  showVolumeSpan.style.cssText = `height: ${(videoTag.volume * 100) / 1}%`;
});

volumeDown.addEventListener("click", () => {
  if (videoTag.volume >= 0.1) {
    videoTag.volume -= 0.1;
  }
  showVolumeSpan.style.cssText = `height: ${(videoTag.volume * 100) / 1}%`;
});
