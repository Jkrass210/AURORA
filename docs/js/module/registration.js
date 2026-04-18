export function registration() {
  const registrationBox = document.querySelector('.registration')
  const tabButtonsContainer = registrationBox.querySelector('.personal-account__list-points');
  const formsContainer = registrationBox.querySelector('.box-registration');

  // Если элементов нет, выходим
  if (!tabButtonsContainer || !formsContainer) return;

  // Находим все кнопки и формы
  const tabButtons = tabButtonsContainer.querySelectorAll('a');
  const forms = formsContainer.querySelectorAll('.box-form-1__form');

  // Обработчик клика на кнопку
  function handleTabClick(event) {
    event.preventDefault(); // Отменяем переход по ссылке

    const clickedButton = event.currentTarget;
    const targetFormId = clickedButton.id; // Получаем id кнопки (person или legalBody)

    // Убираем active у всех кнопок и форм
    tabButtons.forEach(button => button.classList.remove('active'));
    forms.forEach(form => form.classList.remove('active'));

    // Добавляем active текущей кнопке
    clickedButton.classList.add('active');

    // Находим соответствующую форму и активируем её
    const targetForm = formsContainer.querySelector(`.box-form-1__form[for-link="${targetFormId}"]`);
    if (targetForm) {
      targetForm.classList.add('active');
    }
  }

  // Вешаем обработчик на каждую кнопку
  tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick);
  });

  // Активируем первую вкладку по умолчанию (если есть активная)
  const defaultActiveButton = tabButtonsContainer.querySelector('a.active');
  if (defaultActiveButton) {
    const defaultFormId = defaultActiveButton.id;
    const defaultForm = formsContainer.querySelector(`.box-form-1__form[for-link="${defaultFormId}"]`);
    if (defaultForm) {
      defaultForm.classList.add('active');
    }
  }
}