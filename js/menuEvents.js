const mobileButtonMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.top-menu');
const submenu = document.querySelector('.submenu');



mobileButtonMenu.addEventListener('click', showOrHideMenu);
mobileButtonMenu.addEventListener('click', changeMenuIcon);
menu.addEventListener('click', showHideSubMenu);
menu.addEventListener('click', printRadioList);
menu.addEventListener('click', setActiveLink);

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

function setActiveLink(){
  let parent = event.target.parentNode.parentNode;
  let array = parent.children;
  if (event.target != menu){
    for(let i = 0; i < array.length; i++){
      if (array[i].classList.contains('active-link')){
        array[i].classList.remove('active-link');
    }
  }
  event.target.parentNode.classList.add('active-link');
}
}