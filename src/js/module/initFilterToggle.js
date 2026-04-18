export function initFilterToggle(buttonId, filterAttribute) {
  const button = document.getElementById(buttonId);
  const filter = document.querySelector(`[${filterAttribute}]`);
  console.log(filter)

  if (!button || !filter) {
    console.warn('Элементы не найдены');
    return;
  }

  // Проверяем связь между элементами
  if (filter.getAttribute(filterAttribute) !== buttonId) {
    console.warn('Элементы не связаны через атрибут');
    return;
  }

  const toggleActive = () => {
    button.classList.toggle('active');
    filter.classList.toggle('active');

    if (filter.classList.contains('active')) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleOutsideClick);
    } else {
      cleanUpEvents();
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    toggleActive();
  };

  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      removeActive();
    }
  };

  const handleOutsideClick = (e) => {
    if (!filter.contains(e.target) && e.target !== button) {
      removeActive();
    }
  };

  const removeActive = () => {
    button.classList.remove('active');
    filter.classList.remove('active');
    cleanUpEvents();
  };

  const cleanUpEvents = () => {
    document.removeEventListener('keydown', handleEscape);
    document.removeEventListener('click', handleOutsideClick);
  };

  button.addEventListener('click', handleClick);
}