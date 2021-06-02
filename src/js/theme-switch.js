const refs = {
  checkEl: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};
const CHECKBOX_KEY = 'checkedClick';

function updateView() {
  refs.checkEl.checked = localStorage.getItem(CHECKBOX_KEY);
}

function onChecked() {
  if (refs.checkEl.checked) {
    refs.body.classList.add('dark-theme');
    localStorage.setItem(CHECKBOX_KEY, refs.checkEl.checked);
  } else {
    refs.body.classList.remove('dark-theme');
    localStorage.removeItem(CHECKBOX_KEY);
  }
}

updateView();
onChecked();

refs.checkEl.addEventListener('click', onChecked);
