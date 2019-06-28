const favorite = document.querySelector('.favorite');
let favoriteList;
if (localStorage.getItem('favorite') == null) {
  favoriteList = [];
} else {
  favoriteList = JSON.parse(localStorage.getItem('favorite'));
}

radioList.addEventListener('click', addRadioToFavorite);
favoriteBtn.addEventListener('click', setFavoriteList);
favoriteBtn.addEventListener('click', showFavoriteList);
favorite.addEventListener('click', deleteRadioFromFavorite);

function addRadioToFavorite() {

  if (event.target.classList.contains('radio__button')) {
    if (localStorage.getItem('loginStatus') == 'true') {
      if (favoriteList.indexOf(event.target.parentNode.id) == -1) {
        favoriteList.push(event.target.parentNode.id);
        localStorage.setItem('favorite', JSON.stringify(favoriteList));
      }
    } else {
      innerWarningText.innerHTML = 'to add radio to favorites you need to login';
      show(warningModal);
    }

  }
}

function setFavoriteList() {
  let getList = '';
  let findList = favoriteList.join(' ');
  dataAll.forEach(el => {
    if (findList.indexOf(el.id) != -1) {
      getList += `<div class="radio " id="${el.id}">
      <img src="${el.img}" alt="${el.id}">
      <div class="radio__title">${el.title}</div>
      <div class="radio__descr">${el.type}</div>
      <button class="radio__button delete-button">Delete of <i class="fas fa-heart hearts"></i> </button>
    </div>`;
    }
  });
  favorite.innerHTML = getList;
}

function showFavoriteList() {
  if (localStorage.getItem('loginStatus') == 'true') {
    favoriteWrap.style.display = 'block';
    radioList.style.display = 'none';
  } else {
    innerWarningText.innerHTML = 'To enter favorite you need to log in ';
    show(warningModal);

  }

}

function deleteRadioFromFavorite() {
  if (event.target.classList.contains('delete-button')) {
    let findElement = event.target.parentNode.id;
    favoriteList.forEach((el, number) => {
      if (el.indexOf(findElement) != -1) {
        favoriteList.splice(number, 1);
      }
    });
    setFavoriteList();
    localStorage.setItem('favorite', JSON.stringify(favoriteList));
  }
}