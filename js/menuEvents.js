const mobileButtonMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.top-menu');
const submenu = document.querySelector('.submenu');



mobileButtonMenu.addEventListener('click', showOrHideMenu);
mobileButtonMenu.addEventListener('click', changeMenuIcon);
menu.addEventListener('click', showHideSubMenu);
menu.addEventListener('click', printRadioList);

//menu.addEventListener('click', changeArrow);

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
      if (el.tagName == 'UL'  ) {
        el.classList.toggle('show');
      }
    });
  }
}



/* function changeArrow() {
  if (event.target.classList.contains('top-menu__link') && window.innerWidth < '800') {
    event.target.childNodes.forEach(el => {
        if (el.tagName == 'I') {
          if(el.classList.contains('fa-sort-down')){
            el.classList.remove('fa-sort-down');
            el.classList.add('fa-sort-up');
          } else if(el.classList.contains('fa-sort-up')){
            el.classList.remove('fa-sort-up');
            el.classList.add('fa-sort-down');
          }
        }
      });
    }
    
} */