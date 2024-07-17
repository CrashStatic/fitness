const VALID_NAME = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
const VALID_NUMBER = /^\d+$/;

const form = document.querySelector('.form__form');
const inputName = document.querySelector('.form__input--name');
const inputNumber = document.querySelector('.form__input--number');
const errorMessage = document.querySelector('.form__error--name');
const errorMessageNumber = document.querySelector('.form__error--number');

// Проверка имени регулярным выражением
const isValidName = (value) => VALID_NAME.test(value);

// Проверка телефона регулярным выражением
const isValidNumber = (value) => VALID_NUMBER.test(value);

const initForm = () => {
  if (!form) {
    return;
  }

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // Получаем значения полей формы
    const userName = inputName.value;
    const userNumber = inputNumber.value;

    // Проверяем, что имя пользователя содержит только буквы
    if (!isValidName(userName)) {
      inputName.classList.add('form__input--invalid');
      errorMessage.textContent = 'Имя только буквами';
    } else {
      inputName.classList.remove('form__input--invalid');
      errorMessage.textContent = '';
    }

    // Проверяем, что телефон пользователя содержит только цифры
    if (!isValidNumber(userNumber)) {
      inputNumber.classList.add('form__input--invalid');
      errorMessageNumber.textContent = 'Номер только цифрами';
    } else {
      inputNumber.classList.remove('form__input--invalid');
      errorMessageNumber.textContent = '';
    }

    //Прописываем условия валидности формы
    const validForm = !inputName.classList.contains('form__input--invalid') && !inputNumber.classList.contains('form__input--invalid');

    // Если всё в порядке, отправляем форму
    if (validForm) {
      form.submit();
    }
  });
};

export { initForm };
