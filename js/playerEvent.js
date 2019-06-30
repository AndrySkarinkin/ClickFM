const radioWrap = document.querySelector('.radio-wrap'),
  radioLogo = document.querySelector('.player-img'),
  radioTitle = document.querySelector('.player-title'),
  radioSong = document.querySelector('.player__data-song'),
  radio = document.querySelector('audio'),
  volume = document.querySelector('.volume-input'),
  noVolume = document.querySelector('.control-volume'),
  like = document.querySelector('.like'),
  playerStop = document.querySelector('.control-stop');
let url;
let trackName;

radioWrap.addEventListener('click', setRadio);
favoriteWrap.addEventListener('click', setRadio);
favoriteWrap.addEventListener('click', alwaysFavorite);
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
  if (event.target.classList.contains('radio-wrap') == false && event.target.classList.contains('radio__button') == false) {
    let title = '';
    let logo = '';
    let currentRadio = getData();
    if (currentList == '') {
      currentList = dataAll;
    }
    currentList.forEach(el => {
      if (currentRadio == el.id) {
        title = el.title;
        url = el.url;
        logo = el.img;
        trackName = el.songName;
        radio.src = url;
        radioLogo.src = logo;
        radioTitle.innerHTML = title;
      }
    });
    getTrackName(trackName);
    changeCheckSongName();
    checkFavorite(event.target);
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
  let radio = '';
  event.target.id == '' ? radio = event.target.parentNode.id : radio = event.target.id;
  return radio;
}

function checkFavorite(target) {
  let login = localStorage.getItem('loginStatus');

  if (target.parentNode.children[3].classList.contains('radio__favorite') && login == 'true') {
    console.log('work');
    like.style.color = '#dc050d';
  } else {
    like.style.color = 'white';
  }
  if (target.classList.contains('radio') && login == 'true') {
    if (target.children[3].classList.contains('radio__favorite')) {
      like.style.color = '#dc050d';
    }
  }
}

function alwaysFavorite() {
  like.style.color = '#dc050d';
}