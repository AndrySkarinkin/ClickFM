const radioWrap = document.querySelector('.radio-wrap'),
  radioLogo = document.querySelector('.player-img'),
  radioTitle = document.querySelector('.player-title'),
  radioSong = document.querySelector('.player__data-song'),
  radio = document.querySelector('audio'),
  volume = document.querySelector('.volume-input'),
  noVolume = document.querySelector('.control-volume'),
  like = document.querySelector('.control-like'),
  previousRadio = document.querySelector('.control-prev'),
  nextRadio = document.querySelector('.control-next'),
  playerStop = document.querySelector('.control-stop');
let url,
  trackName,
  currentRadio,
  title = '',
  logo = '';

radioWrap.addEventListener('click', setRadio);
favoriteWrap.addEventListener('click', setRadio);
volume.addEventListener('mousemove', setVolume);
volume.addEventListener('input', changeProgress);
noVolume.addEventListener('click', stopVolume);
playerStop.addEventListener('click', setPlayOrStopKey);
playerStop.addEventListener('click', playOrStopSound);
previousRadio.addEventListener('click', setPrevRadio);
nextRadio.addEventListener('click', setNextRadio);

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

function setPrevRadio() {

  for (i = 0; i < currentList.length; i++) {
    if (currentList[i].id == currentRadio) {
      title = currentList[i - 1].title;
      url = currentList[i - 1].url;
      logo = currentList[i - 1].img;
      trackName = currentList[i - 1].songName;
      radio.src = url;
      radioLogo.src = logo;
      radioTitle.innerHTML = title;
      currentRadio = currentList[i - 1].id;
      getTrackName(trackName);
      changeCheckSongName();
      checkFavorite(event.target);
    }
  }
}

function setNextRadio() {
  for (i = 0; i < currentList.length - 1; i++) {
    if (currentList[i].id == currentRadio) {
      title = currentList[i + 1].title;
      url = currentList[i + 1].url;
      logo = currentList[i + 1].img;
      trackName = currentList[i + 1].songName;
      radio.src = url;
      radioLogo.src = logo;
      radioTitle.innerHTML = title;
      currentRadio = currentList[i + 1].id;
      getTrackName(trackName);
      changeCheckSongName();
      checkFavorite(event.target);
      break;
    }
  }
}

function setRadio() {
  if (event.target.classList.contains('radio-wrap') == false && event.target.classList.contains('radio__button') == false) {

    currentRadio = getData();
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
    checkFavorite();
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
      if (window.innerWidth < 1000 && window.innerWidth > 800 || window.innerWidth < 600) {
        data.title.length > 35 ? data.title = data.title.substring(0, 34) + "..." : data.title = data.title;
      }
      if(window.innerWidth < 400){
        data.title.length > 25 ? data.title = data.title.substring(0, 24) + "..." : data.title = data.title;
      }

      if (radioSong.innerHTML == data.title) {
        return true;
      } else {
        radioSong.innerHTML = data.title;
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

function checkFavorite() {
  if(localStorage.getItem(registrStatus) == 'true'){
    let count = 0;
    let fav = JSON.parse(localStorage.getItem('favorite'));
    fav.forEach(el => {
      if (el == currentRadio && localStorage.getItem('loginStatus') == 'true') {
        count++;
      }
    });
    count > 0 ? like.style.display = 'inline-block' : like.style.display = 'none';
  }
}

function changeProgress() {
  let progress = volume.value;
  progress = progress * 100;
  volume.style.background =
    `-webkit-linear-gradient(left,#409cde 0%, #409cde ${progress}%, #ffffff ${progress}%, #ffffff 100% )`;
  volume.style.background =
    `-moz-linear-gradient(left,#409cde 0%, #409cde ${progress}%, #ffffff ${progress}%, #ffffff 100% )`;
}