export function newTabs() {
  document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.querySelector('.box-double-catalog');
  
    if (!catalog) return;
  
    const openParents = () => {
      const selectedItems = catalog.querySelectorAll('.selecd');
  
      selectedItems.forEach((item) => {
        let parent = item.closest('li');
        while (parent) {
          const button = parent.querySelector('.box-double-catalog__btn-1, .box-double-catalog__btn-2');
  
          if (button && button !== item) {
            button.classList.add('active');
          }
  
          parent = parent.parentElement.closest('li');
        }
      });
    };
    const closeAllTabs = () => {
      const activeButtons = catalog.querySelectorAll('.box-double-catalog__btn-1.active, .box-double-catalog__btn-2.active');
      activeButtons.forEach(button => button.classList.remove('active'));
    };
    catalog.addEventListener('click', (e) => {
      const button = e.target.closest('.box-double-catalog__btn-1, .box-double-catalog__btn-2');
  
      if (!button) return;
      button.classList.toggle('active');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllTabs();
      }
    });
    openParents();
  });  
}