export function filtersBtnTabs() {
  // Получаем все кнопки
  const buttons = document.querySelectorAll(".filters-btn-tabs");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Отменяем стандартное поведение кнопки (отправка формы)
      event.preventDefault();

      // Переключаем класс active у кнопки
      button.classList.toggle("active");
    });
  });

  // Закрытие всех табов при нажатии Esc
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
    }
  });
}