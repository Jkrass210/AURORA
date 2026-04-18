export function initProductCardModal(options) {
  const {
    triggerSelector,
    modalSelector,
    windowSelector,
    closeSelector,
    activeClass = 'active'
  } = options;

  const triggers = document.querySelectorAll(triggerSelector);
  const modals = document.querySelectorAll(modalSelector);

  if (!triggers.length || !modals.length) {
    console.warn('Elements not found for modal initialization');
    return;
  }

  // Функция открытия модального окна
  function openModal(modal) {
    modal.classList.add(activeClass);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    modal.addEventListener('click', handleOutsideClick);
  }

  // Функция закрытия модального окна
  function closeModal(modal) {
    modal.classList.remove(activeClass);
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEscape);
    modal.removeEventListener('click', handleOutsideClick);
  }

  // Обработка клика вне окна
  function handleOutsideClick(e) {
    const windowElement = this.querySelector(windowSelector);
    if (windowElement && !windowElement.contains(e.target)) {
      closeModal(this);
    }
  }

  // Обработка клавиши Esc
  function handleEscape(e) {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains(activeClass)) {
          closeModal(modal);
        }
      });
    }
  }

  // Обработка клика на триггер
  function handleTriggerClick() {
    const targetModal = this.closest('.new-modal-product-card').querySelector(modalSelector);
    if (targetModal) {
      openModal(targetModal);
    }
  }

  // Обработка клика на кнопку закрытия
  function handleCloseClick(e) {
    if (e.target.closest(closeSelector)) {
      const modal = e.target.closest(modalSelector);
      if (modal) {
        closeModal(modal);
      }
    }
  }

  // Инициализация
  function init() {
    console.log('Initializing modal...');
    
    // Навешиваем обработчики на триггеры
    triggers.forEach(trigger => {
      trigger.addEventListener('click', handleTriggerClick);
    });

    // Навешиваем обработчики на модальные окна для закрытия
    modals.forEach(modal => {
      const closeButtons = modal.querySelectorAll(closeSelector);
      closeButtons.forEach(btn => {
        btn.addEventListener('click', () => closeModal(modal));
      });

      // Делегирование событий для динамически добавленных элементов
      modal.addEventListener('click', handleCloseClick);
    });
    
    console.log('Modal initialized successfully');
  }

  // Автоматически инициализируем при создании
  init();

  // Публичные методы
  return {
    openModal: (modal) => openModal(modal),
    closeModal: (modal) => closeModal(modal)
  };
}