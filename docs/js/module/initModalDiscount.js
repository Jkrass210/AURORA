/*export function initModalDiscount(selectors) {
  // Деструктуризация селекторов
  const {
    modalSelector,
    windowSelector,
    closeButtonSelector
  } = selectors;

  // Получение элементов
  const modal = document.querySelector(modalSelector);
  const modalWindow = document.querySelector(windowSelector);
  const closeButton = document.querySelector(closeButtonSelector);

  // Проверка существования элементов
  if (!modal || !modalWindow || !closeButton) {
    console.error('Modal elements not found');
    return;
  }

  // Ключ для localStorage
  const storageKey = 'modalDiscountHidden';

  // Функция для скрытия модального окна
  function hideModal() {
    modal.style.display = 'none';

    // Сохранение времени скрытия в localStorage
    const hideTime = new Date().getTime();
    localStorage.setItem(storageKey, hideTime.toString());
  }

  // Функция для проверки, нужно ли показывать модальное окно
  function shouldShowModal() {
    const hideTime = localStorage.getItem(storageKey);

    // Если в localStorage нет записи - показываем модалку
    if (!hideTime) return true;

    const currentTime = new Date().getTime();
    const timeDiff = currentTime - parseInt(hideTime);

    // Показываем, если прошло больше часа (3600000 мс)
    return timeDiff > 3600000;
  }

  // Функция для показа модального окна
  function showModal() {
    modal.style.display = 'flex';
  }

  // Функция для закрытия по клику вне окна
  function handleOutsideClick(event) {
    if (modalWindow && !modalWindow.contains(event.target) && modal.contains(event.target)) {
      hideModal();
    }
  }

  // Функция для закрытия по ESC
  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      hideModal();
    }
  }

  // Функция для закрытия по кнопке
  function handleCloseButtonClick() {
    hideModal();
  }

  // Инициализация модального окна
  function init() {
    // Проверяем, нужно ли показывать модальное окно
    // Если нужно показывать - меняем display на flex
    // Если не нужно - оставляем как есть (none из CSS)
    if (shouldShowModal()) {
      showModal();
    }
    // else блок не нужен - оставляем display: none из CSS

    // Добавление обработчиков событий
    closeButton.addEventListener('click', handleCloseButtonClick);
    modal.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    // Функция для очистки (удаления обработчиков)
    return () => {
      closeButton.removeEventListener('click', handleCloseButtonClick);
      modal.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }

  // Запуск инициализации и возврат функции очистки
  return init();
}*/

export function initModalDiscount(selectors) {
  // Деструктуризация селекторов
  const {
    modalSelector,
    windowSelector,
    closeButtonSelector
  } = selectors;

  // Получение элементов
  const modal = document.querySelector(modalSelector);
  const modalWindow = document.querySelector(windowSelector);
  const closeButton = document.querySelector(closeButtonSelector);

  // Проверка существования элементов
  if (!modal || !modalWindow || !closeButton) {
    console.error('Modal elements not found');
    return;
  }

  // Ключ для localStorage
  const storageKey = 'modalDiscountHidden';

  // Функция для скрытия модального окна
  function hideModal() {
    modal.style.display = 'none';

    // Сохранение времени скрытия в localStorage
    const hideTime = new Date().getTime();
    localStorage.setItem(storageKey, hideTime.toString());
  }

  // Функция для проверки, нужно ли показывать модальное окно
  function shouldShowModal() {
    const hideTime = localStorage.getItem(storageKey);

    // Если в localStorage нет записи - показываем модалку
    if (!hideTime) return true;

    const currentTime = new Date().getTime();
    const timeDiff = currentTime - parseInt(hideTime);

    // Показываем, если прошло больше часа (3600000 мс)
    return timeDiff > 3600000;
  }

  // Функция для показа модального окна
  function showModal() {
    modal.style.display = 'flex';
  }

  // Функция для закрытия по клику вне окна
  function handleOutsideClick(event) {
    if (modalWindow && !modalWindow.contains(event.target) && modal.contains(event.target)) {
      hideModal();
    }
  }

  // Функция для закрытия по ESC
  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      hideModal();
    }
  }

  // Функция для закрытия по кнопке
  function handleCloseButtonClick() {
    hideModal();
  }

  // Функция для обработки клика по ссылке внутри модалки
  function handleLinkClick(event) {
    const link = event.target.closest('a');
    if (!link) return;

    // Проверяем, является ли ссылка обычной HTTP/HTTPS ссылкой
    const href = link.getAttribute('href');
    const isExternalLink = href &&
      (href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('/'));

    // Проверяем специальные атрибуты
    const hasSpecialTarget = link.getAttribute('target') === '_blank';
    const isDownloadLink = link.hasAttribute('download');

    // Пропускаем специальные случаи
    /*if ( isDownloadLink || !isExternalLink) {
      return; // Не обрабатываем эти случаи
    }*/

    // Предотвращаем стандартное поведение только для обрабатываемых ссылок
    event.preventDefault();

    // Сохраняем URL ссылки
    const linkUrl = link.href;

    // Скрываем модальное окно
    hideModal();

    // Выполняем переход по ссылке после задержки
    setTimeout(() => {
      window.location.href = linkUrl;
    }, 100);
  }

  // Инициализация модального окна
  function init() {
    // Проверяем, нужно ли показывать модальное окно
    if (shouldShowModal()) {
      showModal();
    }

    // Находим все ссылки внутри модального окна
    const modalLinks = modal.querySelectorAll('a');

    // Добавляем обработчики событий
    closeButton.addEventListener('click', handleCloseButtonClick);
    modal.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    // Добавляем обработчики для всех ссылок внутри модалки
    modalLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Функция для очистки (удаления обработчиков)
    return () => {
      closeButton.removeEventListener('click', handleCloseButtonClick);
      modal.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);

      // Удаляем обработчики со всех ссылок
      modalLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }

  // Запуск инициализации и возврат функции очистки
  return init();
}