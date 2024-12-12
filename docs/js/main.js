import { openDrop } from './module/openDrop.js';
import { activateTab } from './module/activateTab.js';
import { updateContent, openMenuLevel1, openMenuLevel2, handleResize, setupMobileMenu } from './module/dropDownCatalog.js';
import { openMenu } from './module/openMenu.js';
import { testWebP } from './module/testWebP.js'
import { toggleModal } from './module/toggleModal.js'

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
    console.log("выполнился webp")
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
});

if (document.querySelectorAll('.drop-down-btn')) {
  const btnsDrop = document.querySelectorAll('.drop-down-btn');
  btnsDrop.forEach(btn => {
    btn.addEventListener('click', () => {
      openDrop(btn, '.drop-down-item')
    })
  })
}

if (document.querySelector('#swiper-1') && document.querySelector('#swiper-1 > .swiper-wrapper') && document.querySelectorAll('#swiper-1 > .swiper-slide')) {
  const swiper1 = new Swiper("#swiper-1", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      570: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1090: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec5__button-next",
      nextEl: ".main-sec5__button-prev",
    },
  });
}

if (document.querySelector('#swiper-2') && document.querySelector('#swiper-2 > .swiper-wrapper') && document.querySelectorAll('#swiper-2 > .swiper-slide')) {
  const swiper2 = new Swiper("#swiper-2", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      570: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1090: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec4__button-next",
      nextEl: ".main-sec4__button-prev",
    },
  });
}

if (document.querySelector('#swiper-3') && document.querySelector('#swiper-3 > .swiper-wrapper') && document.querySelectorAll('#swiper-3 > .swiper-slide')) {
  const swiper3 = new Swiper("#swiper-3", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false,
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1380: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      prevEl: ".main-sec3__button-next",
      nextEl: ".main-sec3__button-prev",
    },
  });
}

if (document.querySelector('#swiper-8') && document.querySelector('#swiper-8 > .swiper-wrapper') && document.querySelectorAll('#swiper-8 > .swiper-slide') && document.querySelector('#swiper-4') && document.querySelector('#swiper-4 > .swiper-wrapper') && document.querySelectorAll('#swiper-4 > .swiper-slide')) {
  const swiper4 = new Swiper("#swiper-4", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    reverseDirection: true,
  });
  const swiper8 = new Swiper("#swiper-8", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,

    pagination: {
      el: ".main-sec1__swiper-pagination",
      clickable: true,
    },
  });
  swiper4.controller.control = swiper8;
  swiper8.controller.control = swiper4;
}

function initSwiper5() {
  if (document.querySelector('#swiper-5') && document.querySelector('#swiper-5 > .swiper-wrapper') && document.querySelectorAll('#swiper-5 > .swiper-slide') && document.querySelector('#swiper-6') && document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')) {
    const swiper6 = new Swiper("#swiper-6", {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: false,
      //watchOverflow: true,
      //watchSlidesProgress: true,
    });
    const swiper5 = new Swiper("#swiper-5", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".product-card-sec1__button-next",
        prevEl: ".product-card-sec1__button-prev",
      },
      thumbs: {
        swiper: swiper6,
      },
    })
  }
}

if (document.querySelector('.product-card-sec1__info')) {
  const parent = document.querySelector('.product-card-sec1__info')
  const buttons = parent.querySelectorAll('.btn6')
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.id, "btn6", "product-card-sec1__info")
    })
  })
}

if (document.querySelector('.drop-down-catalog')) {
  const boxCatalog = document.querySelector('.drop-down-catalog')
  if (window.innerWidth > 950){
    openMenuLevel1({
      boxCatalog:boxCatalog,
      classBtns:'button.drop-down-catalog__btn', 
      classBox:'.drop-down-catalog__content-wrapp', 
      targetSelector:'.drop-down-catalog__main-content'
    });
  } else if (window.innerWidth <= 950) {
    setupMobileMenu()
  }
  
  
  window.addEventListener('resize', handleResize);
  handleResize();
}

if (document.querySelector("#dropCatalog") && document.querySelector(`[data-window-id="dropCatalog"]`)) {
  openMenu("dropCatalog")
}

if (document.querySelector("#burgerMenu") && document.querySelector(`[data-window-id="burgerMenu"]`)) {
  openMenu("burgerMenu", true)
}

if (document.querySelector('#swiper-7') && document.querySelector('#swiper-7 > .swiper-wrapper') && document.querySelectorAll('#swiper-7 > .swiper-slide')) {
  let swiper7;

  function initSwiper() {
    swiper7 = new Swiper('#swiper-7', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  function destroySwiper() {
    if (swiper7) {
      swiper7.destroy(true, true);
      swiper7 = null;
    }
  }

  function handleResize() {
    if (window.innerWidth < 1030 && !swiper7) {
      initSwiper();
    } else if (window.innerWidth >= 1030 && swiper7) {
      destroySwiper();
    }
  }
  handleResize();
  window.addEventListener('resize', handleResize);
}

if (!document.querySelector('.new_block') && document.querySelector('#swiper-6') /*&& document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')*/) {
  initSwiper5()
} else if (document.querySelector('.new_block') && document.querySelector('#swiper-6') /*&& document.querySelector('#swiper-6 > .swiper-wrapper') && document.querySelectorAll('#swiper-6 > .swiper-slide')*/) {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.product-card-sec1__equipment-list-1') &&
        document.querySelector('#swiper-6') &&
        document.querySelector('.new_block')) {
      initializeSwiperSwitcher({
        buttonListSelector: '.product-card-sec1__equipment-list-1',
        swiperContainerId: 'swiper-6',
        newBlockSelector: '.new_block',
      });
    }
  });
}

function initializeSwiperSwitcher({
  buttonListSelector,
  swiperContainerId,
  newBlockSelector,
}) {
  const buttonList = document.querySelector(buttonListSelector);
  const swiperContainer = document.getElementById(swiperContainerId);
  const newBlock = document.querySelector(newBlockSelector);

  const updateSwiper = (index) => {
    console.log('Индекс для обновления Swiper:', index);
    const allSwipers = newBlock.querySelectorAll('.swiper-wrapper-6');
    console.log('Все списки ul:', allSwipers);
    const selectedSwiper = allSwipers[index];

    if (selectedSwiper) {
      swiperContainer.innerHTML = '';
      const clonedSwiper = selectedSwiper.cloneNode(true);
      swiperContainer.appendChild(clonedSwiper);
      initSwiper5()
      console.log(`Список с индексом ${index} вставлен.`);
    } else {
      console.error(`Список с индексом ${index} не найден.`);
    }
  };

  buttonList.addEventListener('click', (event) => {
    console.log('Клик по кнопке');
    const button = event.target.closest('.product-card-sec1__btn-fasteners');
    if (!button) return;

    const li = button.closest('li');
    const index = Array.from(buttonList.children).indexOf(li);
    console.log('Индекс выбранного элемента:', index);

    buttonList.querySelectorAll('li').forEach((item) =>
      item.classList.remove('selected')
    );
    li.classList.add('selected');
    updateSwiper(index);
  });

  const selectedIndex = Array.from(buttonList.children).findIndex((li) =>
    li.classList.contains('selected')
  );
  if (selectedIndex !== -1) {
    console.log('При загрузке найден элемент с индексом:', selectedIndex);
    updateSwiper(selectedIndex);
  } else {
    console.warn('Нет элемента с классом selected при загрузке.');
  }
}

function switchTheme(theme) {
  const currentLink = document.querySelector('link[href*="light.min.css"]');
  
  if (theme === 'light') {
    if (!currentLink) {
      const lightLink = document.createElement('link');
      lightLink.rel = 'stylesheet';
      lightLink.href = '/local/templates/ni/css/light.min.css';
      lightLink.classList.add('theme-style');
      document.head.appendChild(lightLink);
    }
  } else if (theme === 'dark') {
    if (currentLink) {
      currentLink.remove();
    }
  }
}

function saveThemeToLocalStorage(theme) {
  localStorage.setItem('color-scheme', theme);
}

function getThemeFromLocalStorage() {
  return localStorage.getItem('color-scheme') || 'dark';
}

function applySavedTheme() {
  const savedTheme = getThemeFromLocalStorage();
  document.querySelector(`.switcher__radio[value="${savedTheme}"]`).checked = true;
  switchTheme(savedTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();

  const themeRadios = document.querySelectorAll('.switcher__radio');
  themeRadios.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      const selectedTheme = e.target.value;
      switchTheme(selectedTheme);
      saveThemeToLocalStorage(selectedTheme);
    });
  });
});

if (document.querySelector('a.btn5') && document.querySelector('.modal_del_card')) {
  toggleModal('a.btn5', '.modal_del_card','.modal_del_close','.modal_del');
}

if (document.querySelector('a.btn-track-order') && document.querySelector('.modal_del_head_top')) {
  toggleModal('a.btn-track-order', '.modal_del_head_top','.modal_del_close','.modal_del_head');
}


if(document.querySelector('.product-card-sec1__box-left') && document.querySelector('.product-card-sec1__hidden-swiper-mobil')) {
  document.addEventListener('DOMContentLoaded', () => {
    const boxLeftWrapp = document.querySelector('.product-card-sec1__box-left-wrapp');
    const hiddenSwiperMobile = document.querySelector('.product-card-sec1__hidden-swiper-mobil');
    const originalParent = boxLeftWrapp.parentElement;

    const handleResize1 = () => {
      const screenWidth = window.innerWidth;
  
      if (screenWidth < 1030) {
        if (!hiddenSwiperMobile.contains(boxLeftWrapp)) {
          hiddenSwiperMobile.appendChild(boxLeftWrapp);
        }
      } else {
        if (!originalParent.contains(boxLeftWrapp)) {
          originalParent.appendChild(boxLeftWrapp);
        }
      }
    };
    window.addEventListener('resize', handleResize1);
    handleResize1();
  });  
}


if (document.querySelectorAll(".product-card-sec1__item-tab .btn6") && document.querySelectorAll(".product-card-sec1__box-content")) {
  document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".product-card-sec1__item-tab .btn6");
    const contentBlocks = document.querySelectorAll(".product-card-sec1__box-content");

    const activeButton = Array.from(tabButtons).find(button => button.classList.contains("active"));
    if (!activeButton && tabButtons.length > 0) {
      tabButtons[0].classList.add("active");
    }

    const activeContent = Array.from(contentBlocks).find(block => block.classList.contains("active"));
    if (!activeContent && contentBlocks.length > 0) {
      contentBlocks[0].classList.add("active");
    }
  });
}










