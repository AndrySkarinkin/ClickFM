const mobileButtonMenu = document.querySelector('.mobile-menu'),
  menu = document.querySelector('.top-menu'),
  delAccauntBtn = document.querySelector('.del-accaunt'),
  exitBtn = document.querySelector('#exit'),
  signButton = document.querySelector('#sign-up'),
  loginButton = document.querySelector('#log-in'),
  favoriteBtn = document.querySelector('#favorite'),
  heart = document.querySelector('.heart'),
  userIcon = document.querySelector('.user-icon')
submenu = document.querySelector('.submenu');




mobileButtonMenu.addEventListener('click', showOrHideMenu);
mobileButtonMenu.addEventListener('click', changeMenuIcon);
menu.addEventListener('click', showHideSubMenu);
menu.addEventListener('click', printRadioList);
menu.addEventListener('click', setActiveLink);
delAccauntBtn.addEventListener('click', removeFavorite);
menu.addEventListener('click', closeMobileMenu);



function showOrHideMenu() {
  menu.classList.toggle('show');
}

function changeMenuIcon() {
  mobileButtonMenu.childNodes[1].classList.contains('fa-bars') ?
    mobileButtonMenu.innerHTML = ' <i class="fas fa-times"></i>' :
    mobileButtonMenu.innerHTML = ' <i class="fas fa-bars "></i>';
}

function showHideSubMenu() {
  const link = event.target.parentNode;
  if (event.target.classList.contains('top-menu__link')) {
    link.childNodes.forEach(el => {
      if (el.tagName == 'UL') {
        el.classList.toggle('show');
      }
    });
  }
}

function setActiveLink() {
  let parent = event.target.parentNode.parentNode;
  let array = parent.children;
  if (event.target != menu && event.target != signButton && event.target != loginButton &&
    event.target != delAccauntBtn && event.target != exitBtn && event.target != userIcon) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains('active-link')) {
        array[i].classList.remove('active-link');
      }
    }
    event.target.parentNode.classList.add('active-link');
  }
}

function removeFavorite() {
  if (localStorage.getItem('favorite')) {
    localStorage.removeItem('favorite');
  } else {
    console.log('no item');
  }
}

function closeMobileMenu() {
  if (event.target.children.length == 0 || event.target.classList.contains('fav')) {
    showOrHideMenu();
    changeMenuIcon();
  }
}
