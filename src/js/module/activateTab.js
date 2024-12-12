export function activateTab(buttonId, btnClass, parentClass) {
  const parent = document.querySelector(`.${parentClass}`);
  if (!parent) return;
  const buttons = parent.querySelectorAll(`.${btnClass}`);
  const blocks = parent.querySelectorAll('[data-window-id]');

  buttons.forEach(button => button.classList.remove('active'));
  blocks.forEach(block => block.classList.remove('active'));

  const activeButton = parent.querySelector(`#${buttonId}`);
  const activeBlock = parent.querySelector(`[data-window-id="${buttonId}"]`);

  if (activeButton) activeButton.classList.add('active');
  if (activeBlock) activeBlock.classList.add('active');
}
