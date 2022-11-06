const imgWraps = document.querySelectorAll('.place__img-wrap');

const audioData = {
  forest: './sounds/forest.mp3',
  mountains: './sounds/mountains.mp3',
  sea: './sounds/sea.mp3'
}
const audio = new Audio();
audio.loop = 'true';
audio.volume = 0.02;

function turnOnSound(el) {
  if (el.target.classList.contains('place__img-wrap')) {
    let place = el.target.dataset.place;
    audio.src = audioData[place];
  }
  
  audio.play();

  const increaseVolume = setInterval(() => {audio.volume += 0.02}, 500);
  setTimeout(() => {clearInterval(increaseVolume)}, 5000);
}

function turnOffSound() {
  audio.pause();
  audio.volume = 0.02;
}

imgWraps.forEach(imgWrap => {
  imgWrap.addEventListener('mouseenter', turnOnSound);
  imgWrap.addEventListener('mouseleave', turnOffSound);
})

export {turnOnSound, turnOffSound};
