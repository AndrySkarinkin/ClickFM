const modalSignName = document.querySelector('.sign-name'),
  modalSignLogin = document.querySelector('.sign-login'),
  modalSignPassword = document.querySelector('.sign-password'),
  modalLoginLogin = document.querySelector('.login-login'),
  modalLoginPassword = document.querySelector('.login-password'),
  modalSignBtn = document.querySelector('.modal-sign__btn'),
  modalLoginBtn = document.querySelector('.modal-login__btn'),
  warningTitle = document.querySelector('.warning-modal__error');
let login = '';
let password = '';



modalSignName.addEventListener('keyup', () => conductInput(modalSignName, 2));
modalSignLogin.addEventListener('keyup', () => conductInput(modalSignLogin, 5));
modalSignPassword.addEventListener('keyup', () => conductInput(modalSignPassword, 5));
modalSignBtn.addEventListener('click', checkAndSetSignValue);
modalLoginBtn.addEventListener('click', checkLoginandPassword);
delAccauntBtn.addEventListener('click', confirmDeleteAccaunt);
exitBtn.addEventListener('click', confirmExit);



function conductInput(inputName, number) {
  if (inputName.value.length > number) {
    inputName.style.color = 'green';
    inputName.style.borderBottom = '1px solid #409cde';
  } else {
    inputName.style.color = 'black';
    inputName.style.borderBottom = '1px solid red';
  }
}

function checkAndSetSignValue() {

  if (modalSignPassword.value.length > 5) {
    localStorage.setItem('password', modalSignPassword.value);
  } else {
    innerWarningText.innerHTML = 'Password must be at least 5 symbol! Please enter a valid password';
    show(warningModal);
    overlay.style.zIndex = '5';
  }

  if (modalSignLogin.value.length > 5) {
     localStorage.setItem('login', modalSignLogin.value);
  } else {
    innerWarningText.innerHTML = 'Login must be at least 5 symbol! Please enter a valid login';
    show(warningModal);
    overlay.style.zIndex = '5';
  }

  if (modalSignName.value.length > 2) {
    localStorage.setItem('name', modalSignName.value);
  } else {
    innerWarningText.innerHTML = 'Name must be at least 3 symbol ! Please enter a valid name';
    show(warningModal);
    overlay.style.zIndex = '5';
  }

  if (modalSignName.value.length > 2 && modalSignLogin.value.length > 5 && modalSignPassword.value.length > 5) {
    modalSignName.value = '';
    modalSignLogin.value = '';
    modalSignPassword.value = '';
    modalOkText.innerHTML = 'Thank you for registration. Now your favorites section is available after login';
    hide(modalSign);
    show(modalOk);
    signButton.style.display = 'none';
    delAccauntBtn.style.display = 'block';
    localStorage.setItem('registrStatus', true);
  } else {
    localStorage.setItem('registrStatus', false);
  }
}

function checkLoginandPassword() {
  login = localStorage.getItem('login');
  password = localStorage.getItem('password');
  if (modalLoginLogin.value == login && modalLoginPassword.value == password) {
    modalOkText.innerHTML = 'Thanks for the login. Favorites section is available for you';
    hide(modalLogin);
    show(modalOk);
    exitBtn.style.display = 'block';
    loginButton.style.display = 'none';
    userIcon.style.display = 'block';
    delAccauntBtn.style.display = 'none';
    localStorage.setItem('loginStatus', true);
    modalLoginLogin.value = '';
    modalLoginPassword.value = '';
    heart.style.color = '#dc050d';
  } else {
    if (modalLoginPassword.value != password) {
      innerWarningText.innerHTML = 'Please enter the correct password and try logging in again';
      overlay.style.zIndex = '5';
      show(warningModal);
    }
    if (modalLoginLogin.value != login) {
      innerWarningText.innerHTML = 'Please enter a valid login and try logging in again';
      show(warningModal);
    }
    localStorage.setItem('loginStatus', false);
  }

}

function confirmDeleteAccaunt(){
  show(modalUnlogin);
  modalUnloginOkBtn.addEventListener('click', deleteAccaunt);
  modalUnloginNoBtn.addEventListener('click', ()=> hide(modalUnlogin));
}

function deleteAccaunt() {
  localStorage.removeItem('name');
  localStorage.removeItem('login');
  localStorage.removeItem('password');
  localStorage.setItem('registrStatus', false);
  signButton.style.display = 'block';
  delAccauntBtn.style.display = 'none';
  hide(modalUnlogin);
  heart.style.color = 'white';

}

function confirmExit(){
  show(modalExit);
  modalExitOkBtn.addEventListener('click',clearLoginSettings);
  modalExitNoBtn.addEventListener('click', ()=>hide(modalExit));
}

function clearLoginSettings() {
  localStorage.setItem('loginStatus', false);
  exitBtn.style.display = 'none';
  loginButton.style.display = 'block';
  delAccauntBtn.style.display = 'block';
  signButton.style.display = 'none';
  userIcon.style.display = 'none';
  modalLoginLogin.value = '';
  modalLoginPassword.value = '';
  hide(modalExit);
  heart.style.color = 'white';
}