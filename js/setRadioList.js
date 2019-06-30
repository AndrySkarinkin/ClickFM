const radioList = document.querySelector('.radio-wrap'),
  favoriteWrap = document.querySelector('.favorite-wrap');
let currentList = '';

radioList.addEventListener('click', setActiveRadio);

function printRadioList() {
  switch (event.target.id) {
    case 'all':
      setRadioList(dataAll, '', 'all');
      break;
    case 'best':
      setRadioList(dataBest, 'best', 'best');
      break;
    case 'club':
      setRadioList(dataClub, 'club', 'club');
      break;
    case 'dance':
      setRadioList(dataClub, 'dance', 'dance');
      break;
    case 'trance':
      setRadioList(dataClub, 'trance', 'trance');
      break;
    case 'house':
      setRadioList(dataClub, 'house', 'house');
      break;
    case 'russian-mix':
      setRadioList(dataClub, 'russian-mix', 'russian-mix');
      break;
    case 'pop':
      setRadioList(dataPop, 'pop', 'pop');
      break;
    case 'foreign-pop':
      setRadioList(dataPop, 'foreign-pop', 'foreign-pop');
      break;
    case 'russian-pop':
      setRadioList(dataPop, 'russian-pop', 'russian-pop');
      break;
    case 'rap':
      setRadioList(dataRap, 'rap', 'rap');
      break;
    case 'foreign-rap':
      setRadioList(dataRap, 'foreign-rap', 'foreign-rap');
      break;
    case 'russian-rap':
      setRadioList(dataRap, 'russian-rap', 'russian-rap');
      break;
    case 'relax':
      setRadioList(dataRelax, 'relax', 'relax');
      break;
    case 'rock':
      setRadioList(dataRock, 'rock', 'rock');
      break;
    case 'foreign-rock':
      setRadioList(dataRock, 'foreign-rock', 'foreign-rock');
      break;
    case 'russian-rock':
      setRadioList(dataRock, 'russian-rock', 'russian-rock');
      break;
  }
}

function setRadioList(dataList, genre, pathName) {
  let login = localStorage.getItem('loginStatus');
  let findList = '';
  if (login == 'true'){
    let favoriteList = JSON.parse(localStorage.getItem('favorite'));
    findList = favoriteList.join(' ');
  }
  
  let getList = '';
  dataList.forEach(el => {
    if (el.type.indexOf(genre) != -1 && findList.indexOf(el.id) != -1 && login == 'true') {
      getList += `<div class="radio " id="${el.id}">
        <img src="${el.img}" alt="${el.id}">
        <div class="radio__title">${el.title}</div>
        <div class="radio__descr">${el.type}</div>
        <div class="radio__favorite"><i class="fas fa-heart hearts"></i></div>
      </div>`;
    } else if (el.type.indexOf(genre) != -1) {
      getList += `<div class="radio " id="${el.id}">
        <img src="${el.img}" alt="${el.id}">
        <div class="radio__title">${el.title}</div>
        <div class="radio__descr">${el.type}</div>
        <button class="radio__button">Add to <i class="fas fa-heart hearts"></i> </button>
      </div>`;
    }
  });
  radioList.innerHTML = getList;
  currentList = dataList;
  window.location.hash = pathName;
  radioList.style.display = 'flex';
  favoriteWrap.style.display = 'none';
}

function setActiveRadio() {
  let parent;
  event.target.classList.contains('radio') ?
    parent = event.target.parentNode :
    parent = event.target.parentNode.parentNode;
  let array = parent.children;

  if (event.target != radioList) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains('active-radio')) {
        array[i].classList.remove('active-radio');
      }
    }
    event.target.classList.contains('radio') ?
      event.target.classList.add('active-radio') :
      event.target.parentNode.classList.add('active-radio')


  }
}