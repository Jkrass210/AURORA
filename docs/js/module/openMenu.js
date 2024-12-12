import { onStopScroll, offStopScroll } from './scroll.js';

export function openMenu (btnId, scroll = false) {
  const btn = document.querySelector(`#${btnId}`)
  const menu = document.querySelector(`[data-window-id="${btnId}"]`);

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('active');
    if(scroll) {
      onStopScroll()
    }
  })

  document.addEventListener('click', (event) => {
    const isClickInsideBtn = btn.contains(event.target);
    const isClickInsideMenu = menu.contains(event.target);

    if (!isClickInsideBtn && !isClickInsideMenu) {
      btn.classList.remove('active');
      menu.classList.remove('active');
      if(scroll) {
        offStopScroll()
      }
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      btn.classList.remove('active');
      menu.classList.remove('active');
      if(scroll) {
        offStopScroll()
      }
    }
  });
}