import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const LOCALE_STORAGE_KEY = 'feedback-form-state';
import { save, load, remove } from './storage';

initPage();

const onFormInput = e => {
  const { name, value } = e.target;
  let saveData = load(LOCALE_STORAGE_KEY);
  saveData = saveData ? saveData : {};

  saveData[name] = value;
  save(LOCALE_STORAGE_KEY, saveData);
};

const throttledOnFormInput = throttle(onFormInput, 500);
formEl.addEventListener('input', throttledOnFormInput);

function initPage() {
  const saveData = load(LOCALE_STORAGE_KEY);
  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    formEl.elements[name].value = value;
  });
}

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  remove(LOCALE_STORAGE_KEY);
};

formEl.addEventListener('submit', handleSubmit);