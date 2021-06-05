const refs = {
  checkEl: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const CHECKBOX_KEY = 'checkedClick';

function updateView() {
  localStorage.getItem(CHECKBOX_KEY) === Theme.DARK?
  refs.checkEl.checked = true:
  refs.checkEl.checked = false;
  
}


function onChecked() {
  if (refs.checkEl.checked) {
    refs.body.classList.remove('ligth-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem(CHECKBOX_KEY, Theme.DARK);
  } else {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
    localStorage.setItem(CHECKBOX_KEY, Theme.LIGHT);
  }
}

updateView();
onChecked();

refs.checkEl.addEventListener('click', onChecked);
