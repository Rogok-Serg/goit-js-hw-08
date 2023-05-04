import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
}
refs.form.addEventListener('input', throttle(onFormInputValue, 500));
refs.form.addEventListener('submit', onFormSubmit);
const LOCALSTORAGE_KEY = "feedback-form-state"

populateInput()
function onFormInputValue(evt) {
    const email = refs.form.email.value;
    const message = refs.form.message.value;
    const formValue = {
      email,
      message,
    }
  // console.log(formValue)
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
  refs.form.reset();

}

function populateInput() {
  const savedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedValue) {
    refs.form.email.value = savedValue.email;
    refs.form.message.value = savedValue.message
  }
}
