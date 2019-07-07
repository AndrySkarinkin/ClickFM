const registrStatus = localStorage.getItem('registrStatus'),
  loginStatus = localStorage.getItem('loginStatus');

switch (registrStatus) {
  case 'true':
    signButton.style.display = 'none';
    delAccauntBtn.style.display = 'block';
    break;
  case 'false':
    signButton.style.display = 'block';
    delAccauntBtn.style.display = 'none';
    break;
}

switch (loginStatus) {
  case 'true':
    exitBtn.style.display = 'block';
    loginButton.style.display = 'none';
    userIcon.style.display = 'block';
    heart.style.color = '#dc050d';
    delAccauntBtn.style.display = 'none';
    break;

  case 'false':
    exitBtn.style.display = 'none';
    loginButton.style.display = 'block';
    userIcon.style.display = 'none';
    break;   
}

setRadioList(dataAll, '', 'all');
