const radioList = document.querySelector('.radio-wrap');
let bestList = '';
let popList = '';
let clubList = '';
let currentList ='';


function setRadioList() {
  switch (event.target.id) {
    case 'best':
      if (bestList != '') {
        radioList.innerHTML = bestList;
      } else {
        dataBest.forEach(el => {
          bestList += `<div class="radio " id="${el.id}">
          <img src="${el.img}" alt="${el.id}">
          <div class="radio__title">${el.title}</div>
          <div class="radio__descr">${el.type}</div>
          <button class="radio__button">Add to <i class="fas fa-heart hearts"></i> </button>
        </div>`;
        });
        radioList.innerHTML = bestList;
      }
      currentList = dataBest;
      break;
    case 'pop':
      if (popList != '') {
        radioList.innerHTML = popList;
       
      } else {
        dataPop.forEach(el => {
          popList +=
            `<div class="radio" id="${el.id}">
          <img src="${el.img}" alt="${el.id}">
          <div class="radio__title">${el.title}</div>
          <div class="radio__descr">${el.type}</div>
          <button class="radio__button">Add to <i class="fas fa-heart hearts"></i> </button>
        </div>`;
        });
        radioList.innerHTML = popList;
      }
      currentList = dataPop; 
      break;
      case 'club':
      if (clubList != '') {
        radioList.innerHTML = clubList;
      } else {
        dataClub.forEach(el => {
          clubList += `<div class="radio " id="${el.id}">
          <img src="${el.img}" alt="${el.id}">
          <div class="radio__title">${el.title}</div>
          <div class="radio__descr">${el.type}</div>
          <button class="radio__button">Add to <i class="fas fa-heart hearts"></i> </button>
        </div>`;
        });
        radioList.innerHTML = clubList;
      }
      currentList = dataClub;
      break;
  }
}