export function openDrop(btn, itemSelector, init=true) {
  const buttonId = btn.id;
  const drop = document.querySelector(`[data-drop-id="${buttonId}"]`);

  function offDrop() {
    btn.classList.remove("active");
    drop.classList.remove("active");
  }

  function onDrop() {
    btn.classList.add("active");
    drop.classList.add("active");
  }

  if (drop.classList.contains("active")) {
    offDrop();
  } else {
    onDrop();
  }

  document.addEventListener('click', event => {
    if (!btn.contains(event.target) && !drop.contains(event.target)) {
      offDrop();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      offDrop();
    }
  });

  if(init) {
    const span = btn.querySelector('span');

    drop.addEventListener('click', (event) => {
      const clickedItem = event.target.closest(itemSelector);
      if (!clickedItem) return;

      span.textContent = clickedItem.textContent;

      drop.querySelectorAll(itemSelector).forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');
      offDrop()
    })
  }
}