let isMobileView = window.innerWidth < 950;

export function updateContent({boxCatalog, sourceSelector, targetSelector}) {
  const source = boxCatalog.querySelector(`${sourceSelector}.active`);
  const target = boxCatalog.querySelector(targetSelector);
  if (!source || !target) {
    console.error('Источник или целевой блок не найдены.', { source, target });
    return;
  }
  if (!source) {
    console.warn(`Активный блок с классом "${activeClass}" не найден.`);
    return;
  }

  target.innerHTML = '';

  const clonedBlock = source.cloneNode(true);
  target.appendChild(clonedBlock);
}

export function openMenuLevel1({boxCatalog, classBtns, classBox, targetSelector}){
  const buttons = boxCatalog.querySelectorAll(classBtns);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach((el) => {
        const parent = el.parentElement;
        if (parent.classList.contains('hovered')) {
            parent.classList.remove('hovered');
        }
      });
      boxCatalog.querySelectorAll(classBox).forEach((el) => el.classList.remove('active'));

      const parent = btn.parentElement;

      parent.classList.add('hovered');

      const boxActive = parent.querySelector(classBox)

      boxActive.classList.add('active')

      updateContent({
        boxCatalog: boxCatalog.querySelector('.drop-down-catalog__item.hovered'),
        sourceSelector: '.drop-down-catalog__content-wrapp-2',
        targetSelector: '.drop-down-catalog__content-level-2'
      });

      updateContent({
        boxCatalog:boxCatalog, 
        sourceSelector:classBox, 
        targetSelector:targetSelector
      })
      
      const mainContent = document.querySelector('.drop-down-catalog__main-content')
      openMenuLevel2({
        boxCatalog: mainContent,
        classBtns: 'button.drop-down-catalog__btn-2', 
        classBox: '.drop-down-catalog__content-wrapp-2', 
        targetSelector: '.drop-down-catalog__content-level-2'
      })
    })
  })
}

export function openMenuLevel2({boxCatalog, classBtns, classBox, targetSelector}){
  if (boxCatalog.children.length > 0) {
    const buttons = boxCatalog.querySelectorAll(classBtns);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach((el) => {
          const parent = el.parentElement;
          if (parent.classList.contains('hovered-2')) {
              parent.classList.remove('hovered-2');
          }
        });
        boxCatalog.querySelectorAll(classBox).forEach((el) => el.classList.remove('active'));
    
        const parent = btn.parentElement;
    
        parent.classList.add('hovered-2');
    
        const boxActive = parent.querySelector(classBox)
    
        boxActive.classList.add('active')
  
        updateContent({
          boxCatalog:boxCatalog, 
          sourceSelector:classBox, 
          targetSelector:targetSelector
        });
      })
    })
  } else {
      console.log('Блок пустой');
  }
}

export function setupMobileMenu() {
  const catalog = document.querySelector(".drop-down-catalog");
  const buttons = catalog.querySelectorAll('button.drop-down-catalog__btn');
  const buttons2 = catalog.querySelectorAll('.drop-down-catalog__content-level-1 button.drop-down-catalog__btn-2');
  document.querySelectorAll('.hovered-2').forEach((el) => el.classList.remove('hovered-2'));
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      openBox(".drop-down-catalog", 'li', button, '.drop-down-catalog__content-wrapp')
    });
  });
  buttons2.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      openBox(".drop-down-catalog__content-level-1", 'div', button, '.drop-down-catalog__content-wrapp-2');
    });
  });

  function openBox(contaunerClass, parentEl, button, activeBlockClass){
    const parentDiv = button.closest(parentEl);
    if (!parentDiv) return;

    document
      .querySelectorAll(`${contaunerClass} .hovered`)
      .forEach((el) => el.classList.remove('hovered'));
    document
      .querySelectorAll(`${contaunerClass} .active`)
      .forEach((el) => el.classList.remove('active'));

    parentDiv.classList.add('hovered');

    const contentWrapper = parentDiv.querySelector(activeBlockClass);
    if (contentWrapper) {
      contentWrapper.classList.add('active');
    }
  }
}

export function handleResize() {
  const currentIsMobileView = window.innerWidth < 950;

  if (currentIsMobileView !== isMobileView) {
    isMobileView = currentIsMobileView;

    if (isMobileView) {
      setupMobileMenu();
    } else {
      openMenuLevel1({
        boxCatalog:boxCatalog,
        classBtns:'button.drop-down-catalog__btn', 
        classBox:'.drop-down-catalog__content-wrapp', 
        targetSelector:'.drop-down-catalog__main-content'
      });
    }
  }
}







