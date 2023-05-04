import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
}
refs.form.addEventListener('input', onFormInputValue);
refs.form.addEventListener('submit', onFormSubmit);
const LOCALSTORAGE_KEY = "feedback-form-state"

populateInput()
function onFormInputValue(evt) {
  const email = evt.currentTarget.elements.email.value;
    const message = evt.currentTarget.elements.message.value;
    const formValue = {
    email,
    message,
  }
  console.log(formValue)
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  refs.form.reset()

}

function populateInput() {
  const savedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(savedValue);
  if (savedValue) {
    refs.form.email.value = savedValue.email;
    refs.form.message.value = savedValue.message
  }
}
