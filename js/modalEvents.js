const modalSign = document.querySelector('.modal-sign-wrap'),
  modalSignClose = document.querySelector('.modal-sign__close'),
  overlay = document.querySelector('.overlay'),
  modalLogin = document.querySelector('.modal-login-wrap'),
  modalLoginClose = document.querySelector('.modal-login__close'),
  warningModal = document.querySelector('.warning-modal-wrap'),
  innerWarningText = document.querySelector('.warning-modal__text'),
  modalOk = document.querySelector('.modal-ok'),
  modalOkText = document.querySelector('.modal-ok__text'),
  modalOkBtn = document.querySelector('.modal-ok-button'),
  modalExit = document.querySelector('.modal-exit'),
  modalExitOkBtn = document.querySelector('.modal-exit-yes'),
  modalExitNoBtn = document.querySelector('.modal-exit-no'),
  modalUnlogin = document.querySelector('.modal-unlogin'),
  modalUnloginOkBtn = document.querySelector('.modal-unlogin-yes'),
  modalUnloginNoBtn = document.querySelector('.modal-unlogin-no'),
  modalFavorite = document.querySelector('.modal-favorite'),
  modalFavoriteText = document.querySelector('.modal-favorite__title'),
  modalFavoriteOkBtn = document.querySelector('.modal-favorite-yes'),
  modalFavoriteNoBtn = document.querySelector('.modal-favorite-no'),
  closeWarningModal = document.querySelector('.warning-btn');

signButton.addEventListener('click', () => show(modalSign));
modalSignClose.addEventListener('click', () => hide(modalSign));
loginButton.addEventListener('click', chackRegistrStatus);
modalLoginClose.addEventListener('click', () => hide(modalLogin));
modalOkBtn.addEventListener('click',()=>hide(modalOk));
closeWarningModal.addEventListener('click', () => {
  hide(warningModal);
  overlay.style.zIndex = '3';
});

function show(modal) {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  overlay.style.display = 'block';
}

function hide(modal) {
  modal.style.display = 'none';
  document.body.style.overflowY = 'scroll';
  overlay.style.display = 'none';
}

function chackRegistrStatus(){
  let registration = localStorage.getItem('registrStatus');
  
  if (registration == "true"){
    show(modalLogin);
  } else {
    innerWarningText.innerHTML = 'In order to log in, you must first sign up';
    show(warningModal);
    overlay.style.zIndex = '5';

  }
}