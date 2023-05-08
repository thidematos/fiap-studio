'use strict';

//Seletores
const selectOptions = document.querySelector('#select');
const btnSummit = document.querySelector('.summit');
const tableRows = document.querySelectorAll('.tableRow');
const inputNum = document.querySelector('#inputNum');
const section = document.querySelector('.section');
const sectionList = document.querySelector('.section_list');

//Main Object: Planos disponiveis
const plans = {
  basic: 30,
  silver: 20,
  gold: 10,
  platinum: 5,
};

//Functions
const createIncome = function (income) {
  let lis = document.createElement('li');
  let firstWord = document.createElement('p');
  let incomeSentence = document.createElement('p');

  lis.classList.add('list_li');
  firstWord.classList.add('color');

  incomeSentence.textContent = `R$ ${income.toFixed(2)}`;
  firstWord.textContent = 'Bônus:';

  sectionList.append(lis);
  lis.appendChild(firstWord);
  lis.appendChild(incomeSentence);
};

//Filling Options
for (const item of Object.keys(plans)) {
  let option = document.createElement('option');
  option.value = item;
  option.textContent = item.replace(item[0], item[0].toUpperCase());
  selectOptions.append(option);
}

//Selecting Options
selectOptions.addEventListener('change', function (e) {
  for (const [key, value] of Object.entries(plans)) {
    if (e.target.value === key) {
      tableRows.forEach((e) => e.classList.remove('selected'));
      document.querySelector(`#${key}`).classList.add('selected');
    }
  }
});

btnSummit.addEventListener('click', function (e) {
  if (inputNum.value <= 0) {
    const h1 = document.createElement('h1');
    h1.textContent = 'Please, enter a valid Number';
    h1.style.color = 'var(--corRosa)';
    section.append(h1);
    setTimeout(function () {
      h1.remove();
    }, 4000);
  } else {
    for (const [key, value] of Object.entries(plans)) {
      if (selectOptions.value === key) {
        document.querySelectorAll('.list_li').forEach((e) => e.remove());
        const income = Number(inputNum.value) * (value / 100);
        createIncome(income);
      }
      // console.log(key, value);
    }
  }
});
