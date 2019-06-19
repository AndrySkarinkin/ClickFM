let radioWrap = document.querySelector('.radio-wrap');
let radioLogo = document.querySelector('.player-img');
let radioTitle = document.querySelector('.player-title');
let radioSong = document.querySelector('.player__data-song');
let radio = document.querySelector('audio');
let volume = document.querySelector('.volume-input');
let noVolume = document.querySelector('.control-volume');
let playerStop = document.querySelector('.control-stop');
let url;
let trackName;

radioWrap.addEventListener('click', setRadio);
volume.addEventListener('mousemove', setVolume);
noVolume.addEventListener('click', stopVolume);
playerStop.addEventListener('click', setPlayOrStopKey);
playerStop.addEventListener('click', playOrStopSound);

function setVolume() {
  radio.volume = volume.value;
}

function stopVolume() {
  if (radio.volume != 0) {
    radio.volume = 0;
  } else {
    setVolume();
  }
  if (noVolume.childNodes[1].classList.contains('volumeon')) {
    noVolume.innerHTML = ' <i class="fas fa-volume-mute volumeof"></i>';
  } else {
    noVolume.innerHTML = ' <i class="fas fa-volume-up volumeon"></i>';
  }
}

function setRadio() {
  if (event.target.classList.contains('radio-wrap') == false) {
    let title = '';
    let logo = '';
    let currentRadio = getData();
    currentList.forEach(el => {
      if (currentRadio == el.id) {
        title = el.title;
        url = el.url;
        logo = el.img;
        trackName = el.songName;
      }
    });
    radio.src = url;
    radioLogo.src = logo;
    radioTitle.innerHTML = title;
    getTrackName(trackName);
    changeCheckSongName();
  }
}

function setPlayOrStopKey() {
  if (playerStop.childNodes[1].classList.contains('fa-stop')) {
    playerStop.innerHTML = ' <i class="fas fa-play" title = "play"></i>';
  } else {
    playerStop.innerHTML = ' <i class="fas fa-stop"></i>';
  }
}

function playOrStopSound() {
  if (playerStop.childNodes[1].classList.contains('fa-stop')) {
    radio.src = url;
  } else {
    radio.src = '';
  }
}

function getTrackName(songName = trackName) {
  fetch(songName)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.title.length > 30 ? data.title = data.title.substring(0, 31) + "..." : data.title = data.title;
      if (radioSong.innerHTML == data.title) {
        return true;
      } else {
        radioSong.innerHTML = data.title;
        console.log('newSong');
      }
    });
}

function changeCheckSongName() {
  setInterval(getTrackName, 5000);
}

function getData() {
  console.log(event.target);
  let radio = '';
  event.target.id == '' ? radio = event.target.parentNode.id : radio = event.target.id;
  return radio;
}