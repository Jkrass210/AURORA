export function onStopScroll() {
  const body = document.querySelector('body')
  body.classList.toggle('stop-scroll')
}

export function offStopScroll() {
  const body = document.querySelector('body')
  body.classList.remove('stop-scroll')
}