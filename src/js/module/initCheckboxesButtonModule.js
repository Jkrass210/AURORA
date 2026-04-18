export function initCheckboxesButtonModule(buttonSelector, containerSelector, checkboxSelector, activeClass) {
    // Функция проверки состояния чекбоксов
    const checkCheckboxesState = () => {
        const button = document.querySelector(buttonSelector);
        const container = document.querySelector(containerSelector);
        
        if (!button || !container) return;
        
        const checkboxes = container.querySelectorAll(checkboxSelector);
        const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        
        if (anyChecked) {
            button.classList.add(activeClass);
        } else {
            button.classList.remove(activeClass);
        }
    };
    
    // Обработчик изменения состояния чекбоксов
    const handleCheckboxChange = (event) => {
        if (event.target.matches(checkboxSelector)) {
            checkCheckboxesState();
        }
    };
    
    // Инициализация модуля
    const init = () => {
        const button = document.querySelector(buttonSelector);
        const container = document.querySelector(containerSelector);
        
        // Проверяем наличие всех необходимых элементов
        if (!button || !container) return;
        
        // Начальная проверка состояния
        checkCheckboxesState();
        
        // Добавляем обработчик событий на контейнер (делегирование)
        container.addEventListener('change', handleCheckboxChange);
        
        // Возвращаем функцию для очистки
        return () => {
            container.removeEventListener('change', handleCheckboxChange);
        };
    };
    
    // Запускаем инициализацию при загрузке DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Для наблюдения за динамически добавляемыми элементами
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Проверяем, появились ли нужные элементы
                const button = document.querySelector(buttonSelector);
                const container = document.querySelector(containerSelector);
                
                if (button && container) {
                    checkCheckboxesState();
                }
            }
        });
    });
    
    // Начинаем наблюдение за изменениями в DOM
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    return {
        checkState: checkCheckboxesState,
        destroy: () => {
            const container = document.querySelector(containerSelector);
            if (container) {
                container.removeEventListener('change', handleCheckboxChange);
            }
            observer.disconnect();
        }
    };
}